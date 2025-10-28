from flask import Flask
from flask_cors import CORS # Importa CORS

# 1. Crea la aplicación del servidor
app = Flask(__name__)
# 2. Permite que tu página web (de otro origen) le hable a este servidor
CORS(app) 

# 3. Define una "ruta" o URL que podemos llamar
# Esto crea la dirección: http://127.0.0.1:5000/clic-boton
@app.route("/clic-boton")
def manejar_clic():
    # 4. Esta es la acción que querías:
    # Se imprimirá en la terminal donde ejecutes este script
    print("¡El botón del portafolio fue presionado!")
    
    # 5. Devuelve una respuesta al navegador
    return {"mensaje": "¡Recibido en el servidor!"}

@app.route("/clic-btres")
def manejar_ctres(): 
    print("el boton tres a sido presionado")
    return{"mensaje" : "recibido en el servidor"}
# 6. Ejecuta el servidor cuando corras el archivo
if __name__ == "__main__":
    app.run(port=5000, debug=True)