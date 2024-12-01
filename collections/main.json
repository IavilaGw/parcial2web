{
	"info": {
		"_postman_id": "58f0694b-c7a1-485b-a834-146b9b0a091e",
		"name": "ApiParcial2",
		"schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json",
		"_exporter_id": "13687493"
	},
	"item": [
		{
			"name": "Usuarios",
			"item": [
				{
					"name": "Crear usuario",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Status code is 201\", function () {",
									"    pm.response.to.have.status(201);",
									"});",
									"",
									"pm.test(\"Response has the correct structure\", function () {",
									"    const jsonData = pm.response.json();",
									"    pm.expect(jsonData).to.have.property(\"id\");",
									"    pm.expect(jsonData).to.have.property(\"cedula\", 12345678);",
									"    pm.expect(jsonData).to.have.property(\"nombre\", \"Juan Pérez\");",
									"    pm.expect(jsonData).to.have.property(\"grupoInvestigacion\", \"IMAGINE\");",
									"    pm.expect(jsonData).to.have.property(\"numeroExtension\", 4567);",
									"    pm.expect(jsonData).to.have.property(\"rol\", \"Profesor\");",
									"});",
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"cedula\": 12345678,\n  \"nombre\": \"Juan Pérez\",\n  \"grupoInvestigacion\": \"IMAGINE\",\n  \"numeroExtension\": 4567,\n  \"rol\": \"Profesor\",\n  \"jefeId\": 1\n}\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "http://localhost:3000/api/v1/usuarios"
					},
					"response": []
				},
				{
					"name": "Buscar usuario Id",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Status code is 200\", function () {",
									"   pm.response.to.have.status(200);",
									"});"
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [],
						"url": "http://localhost:3000/api/v1/usuarios/{{usuarioId}}"
					},
					"response": []
				},
				{
					"name": "Eliminar usuario id",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Status code is 204\", function () {",
									"   pm.response.to.have.status(204);",
									"});",
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "DELETE",
						"header": [],
						"url": "http://localhost:3000/api/v1/usuarios/{{usuarioId}}"
					},
					"response": []
				},
				{
					"name": "grupo de investigacion no valido",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Status code is 400\", function () {",
									"   pm.response.to.have.status(400);",
									"});",
									"",
									"",
									"pm.test(\"Get expected error message\", function () {",
									"   var data = pm.response.json();",
									"   pm.expect(data.message).to.eql(\"Error grupo no valido.\");",
									"});"
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"cedula\": 12345678,\n  \"nombre\": \"Juan Pérez\",\n  \"grupoInvestigacion\": \"pepe\",\n  \"numeroExtension\": 4567,\n  \"rol\": \"Profesor\",\n  \"jefeId\": 1\n}\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "http://localhost:3000/api/v1/usuarios"
					},
					"response": []
				},
				{
					"name": "Error Decana numero de extension",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Status code is 400\", function () {",
									"   pm.response.to.have.status(400);",
									"});",
									"",
									"",
									"pm.test(\"Get expected error message\", function () {",
									"   var data = pm.response.json();",
									"   pm.expect(data.message).to.eql(\"Error extension debe ser de 8 digitos\");",
									"});"
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"cedula\": 12345678,\n  \"nombre\": \"Juan Pérez\",\n  \"grupoInvestigacion\": \"IMAGINE\",\n  \"numeroExtension\": 4567,\n  \"rol\": \"Decana\",\n  \"jefeId\": 1\n}\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "http://localhost:3000/api/v1/usuarios"
					},
					"response": []
				},
				{
					"name": "Buscar usuario no valido",
					"request": {
						"method": "GET",
						"header": [],
						"url": "http://localhost:3000/api/v1/usuarios"
					},
					"response": []
				}
			]
		},
		{
			"name": "Clases",
			"item": [
				{
					"name": "Buscar clase ID",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Status code is 200\", function () {",
									"   pm.response.to.have.status(200);",
									"});",
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "http://localhost:3000/api/v1/clases/{{claseId}}"
					},
					"response": []
				},
				{
					"name": "Crear clase",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Status code is 201\", function () {",
									"    pm.response.to.have.status(201);",
									"});",
									"",
									"",
									"const jsonData = pm.response.json();",
									"pm.environment.set(\"claseId\", jsonData.id);",
									"",
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"nombre\": \"Clase de Matemáticas\",\n  \"codigo\": \"MAT1012345\",  \n  \"numeroCreditos\": 3,\n  \"profesorId\": \"12345\"\n}\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "http://localhost:3000/api/v1/clases"
					},
					"response": []
				},
				{
					"name": "Clase menos 10 caracteres",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Status code is 400\", function () {",
									"   pm.response.to.have.status(400);",
									"});",
									"",
									"pm.test(\"Get expected error message\", function () {",
									"   var data = pm.response.json();",
									"   pm.expect(data.message).to.eql(\"no tiene 10 caracteres.\");",
									"});"
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"nombre\": \"Clase de Matemáticas\",\n  \"codigo\": \"MAT1015\",  \n  \"numeroCreditos\": 3,\n  \"profesorId\": \"12345\"\n}\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "http://localhost:3000/api/v1/clases/"
					},
					"response": []
				}
			]
		},
		{
			"name": "bonos",
			"item": [
				{
					"name": "obtener todos los bonos",
					"request": {
						"method": "GET",
						"header": [],
						"url": "http://localhost:3000/api/v1/bonos"
					},
					"response": []
				},
				{
					"name": "Crear bono",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Status code is 201\", function () {",
									"    pm.response.to.have.status(201);",
									"});",
									"",
									"",
									"pm.test(\"Guardar código de clase\", function () {",
									"    // Obtener el código de la clase de la respuesta",
									"    const jsonData = pm.response.json();",
									"    const codigoClase = jsonData.clase.codigo;",
									"",
									"    // Guardar el código de clase en una variable de entorno",
									"    pm.environment.set(\"codigoClase\", codigoClase);",
									"",
									"    // Verificar que el código se ha guardado correctamente",
									"    pm.environment.get(\"codigoClase\");",
									"});",
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"monto\": 5000,\n  \"calificacion\": 2,\n  \"palabraClave\": \"elefante\",\n  \"usuarioId\": 1,\n  \"claseId\": 1\n}\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "http://localhost:3000/api/v1/bonos"
					},
					"response": []
				},
				{
					"name": "buscar bono por codigo de clase",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Status code is 200\", function () {",
									"   pm.response.to.have.status(200);",
									"});",
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [],
						"url": "http://localhost:3000/api/v1/bonos/{{codigo}}"
					},
					"response": []
				},
				{
					"name": "Eliminar bono",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Status code is 404\", function () {",
									"   pm.response.to.have.status(404);",
									"});",
									"",
									"pm.test(\"Get expected error message\", function () {",
									"   var data = pm.response.json();",
									"   pm.expect(data.message).to.eql(\"Bono no encontrado\");",
									"});"
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "DELETE",
						"header": [],
						"url": "http://localhost:3000/api/v1/bonos/"
					},
					"response": []
				},
				{
					"name": "Crear bono calificacion mayor a 4",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Status code is 201\", function () {",
									"    pm.response.to.have.status(201);",
									"});",
									"",
									"",
									"",
									"const jsonData = pm.response.json();",
									"pm.environment.set(\"bonoId\", jsonData.id);",
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n  \"monto\": 5000,\n  \"calificacion\": 2,\n  \"palabraClave\": \"elefante\",\n  \"usuarioId\": 1,\n  \"claseId\": 1\n}\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "http://localhost:3000/api/v1/bonos/"
					},
					"response": []
				}
			]
		},
		{
			"name": "borrar bono mayor 4",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 400\", function () {",
							"   pm.response.to.have.status(400);",
							"});",
							"",
							"",
							"pm.test(\"Get expected error message\", function () {",
							"   var data = pm.response.json();",
							"   pm.expect(data.message).to.eql(\"No se puede eliminar un bono con calificación mayor a 4\");",
							"});"
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [],
				"url": "http://localhost:3000/api/v1/bonos/{{bonoId}}"
			},
			"response": []
		}
	]
}