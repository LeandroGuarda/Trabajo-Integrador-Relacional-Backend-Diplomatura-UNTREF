import json

# Función para extraer categorías y géneros únicos del JSON
def extraer_categorias_y_generos(json_file):
    with open(json_file, 'r', encoding='utf-8') as file:
        datos = json.load(file)

    categorias = set()
    generos = set()

    for entrada in datos:
        categorias.add(entrada['categoria'])
        generos.update(entrada['genero'].split(', '))

    return list(categorias), list(generos)

# Función para generar consultas INSERT para categorías y géneros
def generar_inserts_categorias_generos(categorias, generos):
    consultas_categoria = []
    consultas_genero = []

    for idx, categoria in enumerate(categorias, start=1):
        categoria = categoria.replace("'", "''")
        consultas_categoria.append(f"INSERT INTO categorias (id, nombre) VALUES ({idx}, '{categoria}');")

    for idx, genero in enumerate(generos, start=1):
        genero = genero.replace("'", "''")
        consultas_genero.append(f"INSERT INTO generos (id, nombre) VALUES ({idx}, '{genero}');")

    return consultas_categoria, consultas_genero

# Función para generar consultas INSERT para contenido y su relación con géneros
def generar_inserts_contenido(json_file, categoria_map, genero_map):
    with open(json_file, 'r', encoding='utf-8') as file:
        datos = json.load(file)

    columnas_excluidas = {'categoria', 'genero', 'gen', 'reparto', 'busqueda'}
    columnas = [col for col in datos[0].keys() if col not in columnas_excluidas]
    columnas.append('categoria_id')

    consultas_contenido = []
    consultas_genero = []

    for entrada in datos:
        valores = []
        for col in columnas:
            if col == 'categoria_id':
                id_categoria = categoria_map.get(entrada['categoria'], 'NULL')
                valores.append(str(id_categoria))
            else:
                valor = entrada[col]
                if isinstance(valor, str):
                    valor = valor.replace("'", "''")
                    valores.append(f"'{valor}'")
                else:
                    valores.append(str(valor))

        insert_query_contenido = f"INSERT INTO contenido ({', '.join(columnas)}) VALUES ({', '.join(valores)});"
        consultas_contenido.append(insert_query_contenido)

        contenido_id = entrada['id']
        genero_ids = [genero_map.get(g.strip(), 'NULL') for g in entrada['genero'].split(', ')]

        for genero_id in genero_ids:
            if genero_id != 'NULL':
                consultas_genero.append(f"INSERT INTO contenido_generos (contenido_id, genero_id) VALUES ({contenido_id}, {genero_id});")

    return consultas_contenido, consultas_genero

# Función para generar consultas INSERT para actores y la relación contenido_actores
def generar_inserts_actores(json_file):
    with open(json_file, 'r', encoding='utf-8') as file:
        datos = json.load(file)

    actores_unicos = {}
    consultas_actores = []
    consultas_contenido_actores = []

    actor_id_counter = 1

    for entrada in datos:
        contenido_id = entrada['id']
        actores = [actor.strip() for actor in entrada['reparto'].split(',')]

        for actor in actores:
            if actor not in actores_unicos:
                actores_unicos[actor] = actor_id_counter
                actor_escaped = actor.replace("'", "''")
                consultas_actores.append(f"INSERT INTO actores (id, nombre) VALUES ({actor_id_counter}, '{actor_escaped}');")
                actor_id_counter += 1

            actor_id = actores_unicos[actor]
            consultas_contenido_actores.append(f"INSERT INTO contenido_actores (contenido_id, actor_id) VALUES ({contenido_id}, {actor_id});")

    return consultas_actores, consultas_contenido_actores

# Mapeos de categorías y géneros a sus respectivos IDs
categoria_map = {
    "Serie": 1,
    "Película": 2
}

genero_map = {
    "Acción": 1,
    "Drama": 2,
    "Fantasía": 3,
    "Ciencia Ficción": 4,
    "Suspenso": 5,
    "Comedia": 6,
    "Misterio": 7,
    "Aventura": 8,
    "Crimen": 9,
    "Familia": 10
}

# Uso del script
json_file = 'trailerflix.json'

# Extraer y generar consultas para categorías y géneros
categorias, generos = extraer_categorias_y_generos(json_file)
consultas_categoria, consultas_genero = generar_inserts_categorias_generos(categorias, generos)

# Generar consultas para contenido y relaciones con géneros
consultas_contenido, consultas_contenido_genero = generar_inserts_contenido(json_file, categoria_map, genero_map)

# Generar consultas para actores y relaciones con el contenido
consultas_actores, consultas_contenido_actores = generar_inserts_actores(json_file)

# Imprimir o ejecutar las consultas generadas
print("Consultas para la tabla Categorías:")
for consulta in consultas_categoria:
    print(consulta)

print("\nConsultas para la tabla Géneros:")
for consulta in consultas_genero:
    print(consulta)

print("\nConsultas para la tabla Contenido:")
for consulta in consultas_contenido:
    print(consulta)

print("\nConsultas para la tabla Contenido_Géneros:")
for consulta in consultas_contenido_genero:
    print(consulta)

print("\nConsultas para la tabla Actores:")
for consulta in consultas_actores:
    print(consulta)

print("\nConsultas para la tabla Contenido_Actores:")
for consulta in consultas_contenido_actores:
    print(consulta)
