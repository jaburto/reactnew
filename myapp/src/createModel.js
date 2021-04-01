import * as go from 'gojs';


export function createModel(){
	//START Data Array from BackEnd example, must be deleted when the method change its parameters.
	//Note: First we need to load the groups in the canva
	/*var dataBackend = [
		//START Loading Categories
		{
			id: "1",
			description: "FACTORES CONTRIBUYENTES",//Could be empty or with data
			//attributes: "",//When the element is a group this must be empty
			isAGroup: true,
			linkedGroup: "",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000",
			//sizeOfGroup: "3"
		},
		{
			id: "2",
			description: "AMENAZAS",//Could be empty or with data
			//attributes: "",//When the element is a group this must be empty
			isAGroup: true,
			linkedGroup: "",//Empty when this is not a Group and is not contained in a group
			color: "#FEA3A2",
		},
		{
			id: "3",
			description: "ESTRESES AL PARAMO Y SUS SERVICIOS ECOSISTEMICOS",//Could be empty or with data
			//attributes: "",//When the element is a group this must be empty
			isAGroup: true,
			linkedGroup: "",//Empty when this is not a Group and is not contained in a group
			color: "#CC97FF"//Defined by BackEnd
		},
		{
			id: "4",
			description: "BIODIVERSIDAD/ECOSISTEMAS",//Could be empty or with data
			//attributes: "",//When the element is a group this must be empty
			isAGroup: true,
			linkedGroup: "",//Empty when this is not a Group and is not contained in a group
			color: "#C3D79A"//Defined by BackEnd
		},
		{
			id: "5",
			description: "SERVICIOS ECOSISTEMICOS DE MONAJDA",//Could be empty or with data
			//attributes: "",//When the element is a group this must be empty
			isAGroup: true,
			linkedGroup: "",//Empty when this is not a Group and is not contained in a group
			color: "#02FECF"//Defined by BackEnd
		},
		{
			id: "6",
			description: "BUEN VIVIR",//Could be empty or with data
			//attributes: "",//When the element is a group this must be empty
			isAGroup: true,
			linkedGroup: "",//Empty when this is not a Group and is not contained in a group
			color: "#009AFE",//Defined by BackEnd
			//sizeOfGroup: 2
		},
		//END Loading Categories
		//START Loading Groups








		{
			id: "7",
			description: "Falta de Mano de Obra en Labores agrícolas.",//Could be empty or with data
			attributes: "4,4,2,3,3,1,4,1,4,1,4,1,4,1",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "8",
			titleVisible: false,
			isAGroup: true,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
		},
		{
			id: "9",
			description: "Bajo nivel de escolaridad y educación de la población que vive en zonas altas del páramo.",//Could be empty or with data
			attributes: "2,2,2,2,2,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "8",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "10",
			description: "Bajo nivel de ingresos familiares campesinosen la zona de influencia.",//Could be empty or with data
			attributes: "3,4,3,4,2,4",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "8",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},


		{
			id: "11",
			titleVisible: false,
			isAGroup: true,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
		},
		{
			id: "12",
			description: "Incentivos públicos de conservación existentes poco atractivos para actores locales.",//Could be empty or with data
			attributes: "3,3,2,2,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "11",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "13",
			description: "Incentivos públicos no aplicables por falta de tenencia de tierra.",//Could be empty or with data
			attributes: "3,3,2,2,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "11",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "14",
			description: "Los actores urbanos y del área de influencia no tienen corresponsabilidad en la conservación de los páramos.",//Could be empty or with data
			attributes: "3,4,3,4,2,4",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "15",
			description: "La administración pública y comunitaria no considera presupuestaos para la conservación de páramos.",//Could be empty or with data
			attributes: "4,4,2,3,2,3",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "16",
			description: "Falta de recursos esconómicos y de personal para acciones de control.",//Could be empty or with data
			attributes: "4,4,1,3,1,1",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "17",
			description: "Vías de acceso sin control.",//Could be empty or with data
			attributes: "3,4,4,4,3,3",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "1", //Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "18",
			titleVisible: false,
			isAGroup: true,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
		},
		{
			id: "19",
			description: "Normativas no se aplican por conocimiento y difusión.",//Could be empty or with data
			attributes: "3,3,2,3,2,3",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "18",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "20",
			description: "Normativas desactualizadas y no adaptadas a las necesidades de conservación de Mojanda.",//Could be empty or with data
			attributes: "3,3,2,3,2,3",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "18",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "21",
			description: "Aumento de GEI(causa principal del cambio climático).",//Could be empty or with data
			attributes: "4,4,4,4,2,4",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "22",
			titleVisible: false,
			isAGroup: true,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
		},
		{
			id: "23",
			description: "Personas poco comprometidas xon la conservación y con falta de valores éticos",//Could be empty or with data
			attributes: "2,4,4,4,2,3",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "22",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "24",
			description: "Creencias culturales erróneas (práctica de quemas agrícolas).",//Could be empty or with data
			attributes: "2,4,2,3,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "22",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "25",
			description: "Acaparación de tierras en manos de pocas personas con influencia política y capital.",//Could be empty or with data
			attributes: "2,3,3,3,4,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "26",
			titleVisible: false,
			isAGroup: true,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
		},
		{
			id: "27",
			description: "Bajo control de la tierra en el páramo aumenta presión sobre los recursos natutales",//Could be empty or with data
			attributes: "3,3,2,3,2,3",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "26",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "28",
			description: "Desigualdad en la distribución del recurso hídrico que favorece al interés privado",//Could be empty or with data
			attributes: "3,4,3,4,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "26",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "29",
			description: "Conflictos sobre la propiedad de la tierra, debido a la variedad de intereses sobre un mismo terreno.",//Could be empty or with data
			attributes: "3,4,3,4,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "30",
			description: "Proceso burocráticos y conflictos de competencia no asumen objetivos de conservación.",//Could be empty or with data
			attributes: "4,3,3,4,2,3",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "31",
			description: "Sanciones bajas no relacionadas con el impacto ambiental.",//Could be empty or with data
			attributes: "4,3,3,4,1,4",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "32",
			description: "Tierra fértil en zona baja pero con clima seco y déficit de agua de riego.",//Could be empty or with data
			attributes: "4,3,2,3,2,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "33",
			description: "Falta de alternativas económicas basada en la conservación de recursos.",//Could be empty or with data
			attributes: "2,3,3,3,4,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "34",
			description: "Ganadería es una actividad extensiva, con pocos insumos de producción y tecnología.",//Could be empty or with data
			attributes: "3,2,3,3,3,3",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "35",
			description: "Factores políticos que priorizan construcción de infraestructura.",//Could be empty or with data
			attributes: "3,4,4,4,3,3",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "36",
			description: "Cultura de pensar que la vialidad es un indicador del grado de desarrollo.",//Could be empty or with data
			attributes: "3,4,3,4,3,3",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "37",
			description: "Ciclos de sequías prolongados que no permiten la generación del ciclo hídrico.",//Could be empty or with data
			attributes: "3,4,3,4,2,4",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "38",
			description: "Crecimeinto demográfico por oferta de trabajo de agroindustrias.",//Could be empty or with data
			attributes: "4,4,4,4,4,3",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "39",
			description: "Falta de coordinación y desarticulación de los actores públicos y sociales en la gestión ambiental (MAE, MAGAP, GADM, Juntas parroquiales, etc).",//Could be empty or with data
			attributes: "4,4,3,4,4,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},
		{
			id: "40",
			description: "Ecosistemas mal conservados, desestructurados y desconectados.",//Could be empty or with data
			attributes: "4,3,3,4,2,4",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "1",//Empty when this is not a Group and is not contained in a group
			color: "#FFC000"//Defined by BackEnd
		},










		//EMPIEZA LO ROSA
		{
			id: "41",
			description: "Quemas e incendios",//Could be empty or with data
			attributes: "1,4,3,3,3,1",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "2",//Empty when this is not a Group and is not contained in a group
			color: "#FEA3A2"//Defined by BackEnd
		},
		{
			id: "42",
			//description: "Quemas e incendios",//Could be empty or with data
			//attributes: "1,4,3,3,3,1",//When the element is a group this must be empty
			isAGroup: true,
			titleVisible: false,
			linkedGroup: "2",//Empty when this is not a Group and is not contained in a group
			//color: "#FEA3A2"//Defined by BackEnd
		},
		{
			id: "43",
			description: "Malas practicas agricolas",//Could be empty or with data
			attributes: "2,4,3,3,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "42",//Empty when this is not a Group and is not contained in a group
			color: "#FEA3A2"//Defined by BackEnd
		},
		{
			id: "44",
			description: "Agricultura en laderas",//Could be empty or with data
			attributes: "2,4,3,3,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "42",//Empty when this is not a Group and is not contained in a group
			color: "#FEA3A2"//Defined by BackEnd
		},
		{
			id: "45",
			description: "Sobrepastoreo",//Could be empty or with data
			attributes: "1,2,2,2,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "42",//Empty when this is not a Group and is not contained in a group
			color: "#FEA3A2"//Defined by BackEnd
		},

		{
			id: "46",
			description: "Construcción de caminos sin planificacion",//Could be empty or with data
			attributes: "2,3,4,4,3,1",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "2",//Empty when this is not a Group and is not contained in a group
			color: "#FEA3A2"//Defined by BackEnd
		},

		{
			id: "47",
			description: "Avance de la frontera agricola",//Could be empty or with data
			attributes: "4,4,4,4,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "2",//Empty when this is not a Group and is not contained in a group
			color: "#FEA3A2"//Defined by BackEnd
		},
		{
			id: "48",
			description: "Uso inadecuado de quimicos",//Could be empty or with data
			attributes: "2,4,3,3,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "2",//Empty when this is not a Group and is not contained in a group
			color: "#FEA3A2"//Defined by BackEnd
		},
		{
			id: "49",
			description: "Presencia de basura",//Could be empty or with data
			attributes: "4,3,3,4,2,4",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "2",//Empty when this is not a Group and is not contained in a group
			color: "#FEA3A2"//Defined by BackEnd
		},
		{
			id: "50",
			description: "Estaciones climaticas poco marcadas",//Could be empty or with data
			attributes: "4,3,4,4,4,3",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "2",//Empty when this is not a Group and is not contained in a group
			color: "#FEA3A2"//Defined by BackEnd
		},
		{
			id: "51",
			description: "Tala de arboles",//Could be empty or with data
			attributes: "4,4,3,4,3,3",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "2",//Empty when this is not a Group and is not contained in a group
			color: "#FEA3A2"//Defined by BackEnd
		},
		{
			id: "52",
			description: "Introduccion de especies no nativas (Eucalipto y Pino)",//Could be empty or with data
			attributes: "3,4,4,4,3,4",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "2",//Empty when this is not a Group and is not contained in a group
			color: "#FEA3A2"//Defined by BackEnd
		},
		{
			id: "53",
			//description: "Quemas e incendios",//Could be empty or with data
			//attributes: "1,4,3,3,3,1",//When the element is a group this must be empty
			isAGroup: true,
			titleVisible: false,
			linkedGroup: "2",//Empty when this is not a Group and is not contained in a group
			//color: "#FEA3A2"//Defined by BackEnd
		},
		{
			id: "54",
			description: "Turismo no controlado",//Could be empty or with data
			attributes: "3,3,2,3,3,1",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "53",//Empty when this is not a Group and is not contained in a group
			color: "#FEA3A2"//Defined by BackEnd
		},
		{
			id: "55",
			description: "Vehiculos todo terreno",//Could be empty or with data
			attributes: "2,4,3,3,3,1",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "53",//Empty when this is not a Group and is not contained in a group
			color: "#FEA3A2"//Defined by BackEnd
		},

		//EMPOIUEZA COLO MORADL

		{
			id: "56",
			description: "Paja de menor tamaño",//Could be empty or with data
			attributes: "2,2,2,2,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "3",//Empty when this is not a Group and is not contained in a group
			color: "#CC97FF"//Defined by BackEnd
		},
		{
			id: "57",
			//description: "Quemas e incendios",//Could be empty or with data
			//attributes: "1,4,3,3,3,1",//When the element is a group this must be empty
			isAGroup: true,
			titleVisible: false,
			linkedGroup: "3",//Empty when this is not a Group and is not contained in a group
			//color: "#FEA3A2"//Defined by BackEnd
		},
		{
			id: "58",
			description: "Degradacion y compactacion de suelo",//Could be empty or with data
			attributes: "3,3,3,3,4,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "57",//Empty when this is not a Group and is not contained in a group
			color: "#CC97FF"//Defined by BackEnd
		},
		{
			id: "59",
			description: "Erosion",//Could be empty or with data
			attributes: "3,3,4,4,4,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "57",//Empty when this is not a Group and is not contained in a group
			color: "#CC97FF"//Defined by BackEnd
		},
		{
			id: "60",
			//description: "Quemas e incendios",//Could be empty or with data
			//attributes: "1,4,3,3,3,1",//When the element is a group this must be empty
			isAGroup: true,
			titleVisible: false,
			linkedGroup: "3",//Empty when this is not a Group and is not contained in a group
			//color: "#FEA3A2"//Defined by BackEnd
		},
		{
			id: "61",
			description: "Incremento de la sedimentacion en las lagunas",//Could be empty or with data
			attributes: "2,2,3,3,4,1",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "60",//Empty when this is not a Group and is not contained in a group
			color: "#CC97FF"//Defined by BackEnd
		},
		{
			id: "62",
			description: "Alteracion de la escorrentia superficial",//Could be empty or with data
			attributes: "2,2,4,3,4,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "60",//Empty when this is not a Group and is not contained in a group
			color: "#CC97FF"//Defined by BackEnd
		},
		{
			id: "63",
			description: "Agua contaminada / agroquimicos y animales",//Could be empty or with data
			attributes: "3,3,3,3,3,3",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "3",//Empty when this is not a Group and is not contained in a group
			color: "#CC97FF"//Defined by BackEnd
		},
		{
			id: "64",
			description: "Menos agua en el paramo",//Could be empty or with data
			attributes: "4,3,4,4,3,1",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "3",//Empty when this is not a Group and is not contained in a group
			color: "#CC97FF"//Defined by BackEnd
		},
		{
			id: "65",
			//description: "Quemas e incendios",//Could be empty or with data
			//attributes: "1,4,3,3,3,1",//When the element is a group this must be empty
			isAGroup: true,
			titleVisible: false,
			linkedGroup: "3",//Empty when this is not a Group and is not contained in a group
			//color: "#FEA3A2"//Defined by BackEnd
		},
		{
			id: "66",
			description: "Perdidas de la cobeertura vegetal",//Could be empty or with data
			attributes: "3,3,4,4,3,1",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "65",//Empty when this is not a Group and is not contained in a group
			color: "#CC97FF"//Defined by BackEnd
		},
		{
			id: "67",
			description: "Disminucion de la biodiversidad",//Could be empty or with data
			attributes: "3,3,3,3,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "65",//Empty when this is not a Group and is not contained in a group
			color: "#CC97FF"//Defined by BackEnd
		},
		{
			id: "68",
			description: "Disminucion de especies de flora y fauna",//Could be empty or with data
			attributes: "3,3,3,3,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "65",//Empty when this is not a Group and is not contained in a group
			color: "#CC97FF"//Defined by BackEnd
		},

		//VIENE LO VERDE DE BIODIVERSIDAD/ECOSISTEMAS

		{
			id: "69",
			description: "Ecosistema Paramo",//Could be empty or with data
			//attributes: "1,4,3,3,3,1",//When the element is a group this must be empty
			isAGroup: true,
			titleVisible: true,
			linkedGroup: "4",//Empty when this is not a Group and is not contained in a group
			color: "#C3D79A"//Defined by BackEnd
		},
		{
			id: "70",
			description: "Paja",//Could be empty or with data
			//attributes: "3,3,4,4,3,1",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "69",//Empty when this is not a Group and is not contained in a group
			color: "#C3D79A"//Defined by BackEnd
		},
		{
			id: "71",
			description: "Arbustos",//Could be empty or with data
			//attributes: "3,3,3,3,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "69",//Empty when this is not a Group and is not contained in a group
			color: "#C3D79A"//Defined by BackEnd
		},
		{
			id: "72",
			description: "Almohadillas",//Could be empty or with data
			//attributes: "3,3,3,3,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "69",//Empty when this is not a Group and is not contained in a group
			color: "#C3D79A"//Defined by BackEnd
		},
		{
			id: "73",
			description: "Sistema lacustre mojanda",//Could be empty or with data
			//attributes: "1,4,3,3,3,1",//When the element is a group this must be empty
			isAGroup: true,
			titleVisible: true,
			linkedGroup: "4",//Empty when this is not a Group and is not contained in a group
			color: "#C3D79A"//Defined by BackEnd
		},
		{
			id: "74",
			description: "Pagyo",//Could be empty or with data
			//attributes: "3,3,4,4,3,1",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "73",//Empty when this is not a Group and is not contained in a group
			color: "#C3D79A"//Defined by BackEnd
		},
		{
			id: "75",
			description: "Aguas subterraneas",//Could be empty or with data
			//attributes: "3,3,3,3,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "73",//Empty when this is not a Group and is not contained in a group
			color: "#C3D79A"//Defined by BackEnd
		},
		{
			id: "76",
			description: "Capacitaciones y vertientes",//Could be empty or with data
			//attributes: "3,3,3,3,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "73",//Empty when this is not a Group and is not contained in a group
			color: "#C3D79A"//Defined by BackEnd
		},
		{
			id: "77",
			description: "6 lagunas",//Could be empty or with data
			//attributes: "3,3,3,3,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "73",//Empty when this is not a Group and is not contained in a group
			color: "#C3D79A"//Defined by BackEnd
		},
		{
			id: "78",
			description: "Vegetacion arborea nautica",//Could be empty or with data
			//attributes: "1,4,3,3,3,1",//When the element is a group this must be empty
			isAGroup: true,
			titleVisible: true,
			linkedGroup: "4",//Empty when this is not a Group and is not contained in a group
			color: "#C3D79A"//Defined by BackEnd
		},
		{
			id: "79",
			description: "Romerillo, Yagual, pumumaqui, chuquirahua, achupalla, etc.",//Could be empty or with data
			//attributes: "3,3,4,4,3,1",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "78",//Empty when this is not a Group and is not contained in a group
			color: "#C3D79A"//Defined by BackEnd
		},
		{
			id: "80",
			description: "Fauna",//Could be empty or with data
			//attributes: "1,4,3,3,3,1",//When the element is a group this must be empty
			isAGroup: true,
			titleVisible: true,
			linkedGroup: "4",//Empty when this is not a Group and is not contained in a group
			color: "#C3D79A"//Defined by BackEnd
		},
		{
			id: "81",
			description: "Conejo, lobo de paramo, tigrilñlo, condor, perdiz, Pava de monte.",//Could be empty or with data
			//attributes: "3,3,4,4,3,1",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "80",//Empty when this is not a Group and is not contained in a group
			color: "#C3D79A"//Defined by BackEnd
		},


		//VIENE LO VERDE AGAU DE MONAJDA
		{
			id: "82",
			description: "Servicios de aprovisdionamiento",//Could be empty or with data
			//attributes: "1,4,3,3,3,1",//When the element is a group this must be empty
			isAGroup: true,
			titleVisible: true,
			linkedGroup: "5",//Empty when this is not a Group and is not contained in a group
			color: "#02FECF"//Defined by BackEnd
		},
		{
			id: "83",
			description: "Alimentos y forraje",//Could be empty or with data
			//attributes: "3,3,4,4,3,1",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "82",//Empty when this is not a Group and is not contained in a group
			color: "#02FECF"//Defined by BackEnd
		},
		{
			id: "84",
			description: "Farmacia (zunfo, valeriana, chiquirahua)",//Could be empty or with data
			//attributes: "3,3,3,3,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "82",//Empty when this is not a Group and is not contained in a group
			color: "#02FECF"//Defined by BackEnd
		},
		{
			id: "85",
			description: "Agua consumo humano yt riego",//Could be empty or with data
			//attributes: "3,3,3,3,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "82",//Empty when this is not a Group and is not contained in a group
			color: "#02FECF"//Defined by BackEnd
		},
		{
			id: "86",
			description: "Servicios de regulacion",//Could be empty or with data
			//attributes: "1,4,3,3,3,1",//When the element is a group this must be empty
			isAGroup: true,
			titleVisible: true,
			linkedGroup: "5",//Empty when this is not a Group and is not contained in a group
			color: "#02FECF"//Defined by BackEnd
		},
		{
			id: "87",
			description: "Aire puro",//Could be empty or with data
			//attributes: "3,3,4,4,3,1",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "86",//Empty when this is not a Group and is not contained in a group
			color: "#02FECF"//Defined by BackEnd
		},
		{
			id: "88",
			description: "Regulador climatico (heladas, granizadas)",//Could be empty or with data
			//attributes: "3,3,3,3,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "86",//Empty when this is not a Group and is not contained in a group
			color: "#02FECF"//Defined by BackEnd
		},
		{
			id: "89",
			description: "Agua en calidad y cantidad",//Could be empty or with data
			//attributes: "3,3,3,3,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "86",//Empty when this is not a Group and is not contained in a group
			color: "#02FECF"//Defined by BackEnd
		},
		{
			id: "90",
			description: "Proytecccion de suelos y prevencion de erosion",//Could be empty or with data
			//attributes: "3,3,3,3,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "86",//Empty when this is not a Group and is not contained in a group
			color: "#02FECF"//Defined by BackEnd
		},
		{
			id: "91",
			description: "Sumidero de carbono",//Could be empty or with data
			//attributes: "3,3,3,3,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "86",//Empty when this is not a Group and is not contained in a group
			color: "#02FECF"//Defined by BackEnd
		},
		{
			id: "93",
			description: "Servicios Culturales",//Could be empty or with data
			//attributes: "1,4,3,3,3,1",//When the element is a group this must be empty
			isAGroup: true,
			titleVisible: true,
			linkedGroup: "5",//Empty when this is not a Group and is not contained in a group
			color: "#02FECF"//Defined by BackEnd
		},
		{
			id: "94",
			description: "Valor paisajistico",//Could be empty or with data
			//attributes: "3,3,4,4,3,1",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "93",//Empty when this is not a Group and is not contained in a group
			color: "#02FECF"//Defined by BackEnd
		},
		{
			id: "95",
			description: "Identidad cultural",//Could be empty or with data
			//attributes: "3,3,3,3,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "93",//Empty when this is not a Group and is not contained in a group
			color: "#02FECF"//Defined by BackEnd
		},
		{
			id: "96",
			description: "Valor ancestral",//Could be empty or with data
			//attributes: "3,3,3,3,3,2",//When the element is a group this must be empty
			isAGroup: false,
			linkedGroup: "93",//Empty when this is not a Group and is not contained in a group
			color: "#02FECF"//Defined by BackEnd
		},

		//EMPIUEZA LO ULTIMIO DE BUERN VVIVIR
		{
			id: "97",
			titleVisible: false,
			isAGroup: true,
			linkedGroup: "6",//Empty when this is not a Group and is not contained in a group
		},
		{
			id: "98",
			description: "Salud",//Could be empty or with data
			isAGroup: false,
			linkedGroup: "97",//Empty when this is not a Group and is not contained in a group
			color: "#009AFE"//Defined by BackEnd
		},
		{
			id: "99",
			description: "Seguridad y resilencia",//Could be empty or with data
			isAGroup: false,
			linkedGroup: "97",//Empty when this is not a Group and is not contained in a group
			color: "#009AFE"//Defined by BackEnd
		},

		{
			id: "100",
			description: "Recursos económicos",//Could be empty or with data
			isAGroup: false,
			linkedGroup: "97",//Empty when this is not a Group and is not contained in a group
			color: "#009AFE"//Defined by BackEnd
		},
		{
			id: "101",
			description: "Potencial turístico",//Could be empty or with data
			isAGroup: false,
			linkedGroup: "97",//Empty when this is not a Group and is not contained in a group
			color: "#009AFE"//Defined by BackEnd
		},
		{
			id: "102",
			description: "Recreación",//Could be empty or with data
			isAGroup: false,
			linkedGroup: "97",//Empty when this is not a Group and is not contained in a group
			color: "#009AFE"//Defined by BackEnd
		},
		{
			id: "103",
			description: "Sentido de pertenencia",//Could be empty or with data
			isAGroup: false,
			linkedGroup: "97",//Empty when this is not a Group and is not contained in a group
			color: "#009AFE"//Defined by BackEnd
		},






		//START Loading links
		{
			linkFrom: "8",
			linkTo: "7",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},{
			linkFrom: "11",
			linkTo: "10",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},{
			linkFrom: "12",
			linkTo: "23",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},{
			linkFrom: "14",
			linkTo: "29",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},{
			linkFrom: "14",
			linkTo: "22",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},{
			linkFrom: "15",
			linkTo: "16",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},{
			linkFrom: "15",
			linkTo: "39",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},{
			linkFrom: "16",
			linkTo: "51",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},{
			linkFrom: "16",
			linkTo: "17",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},{
			linkFrom: "17",
			linkTo: "53",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},{
			linkFrom: "20",
			linkTo: "12",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},{
			linkFrom: "18",
			linkTo: "31",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},{
			linkFrom: "18",
			linkTo: "41",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "20",
			linkTo: "33",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},{
			linkFrom: "21",
			linkTo: "37",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},

		{
			linkFrom: "24",
			linkTo: "41",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "25",
			linkTo: "47",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "25",
			linkTo: "29",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "27",
			linkTo: "25",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "27",
			linkTo: "29",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "29",
			linkTo: "42",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "29",
			linkTo: "51",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "30",
			linkTo: "39",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "31",
			linkTo: "41",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "32",
			linkTo: "43",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "33",
			linkTo: "43",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "33",
			linkTo: "45",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},

		{
			linkFrom: "34",
			linkTo: "45",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},

		{
			linkFrom: "35",
			linkTo: "46",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "36",
			linkTo: "35",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "36",
			linkTo: "45",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "37",
			linkTo: "50",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "38",
			linkTo: "28",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},

		{
			linkFrom: "38",
			linkTo: "64",
			isStrongLine : 2,
			color: "red",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "39",
			linkTo: "51",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "40",
			linkTo: "65",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
			isStrongLine : 2,
			color: "red",//Puede o no existir
		},

		{
			linkFrom: "41",
			linkTo: "56",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "42",
			linkTo: "57",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "43",
			linkTo: "41",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "44",
			linkTo: "61",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},

		{
			linkFrom: "45",
			linkTo: "56",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},
		{
			linkFrom: "46",
			linkTo: "60",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},

		{
			linkFrom: "47",
			linkTo: "58",
			//color: "black",//Puede o no existir
			//dashedOrNot: false,//Only if the line is dashed
		},{
			linkFrom: "47",
			linkTo: "65",
			//color: "black",//Puede o no existir
			dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "47",
			linkTo: "48",
			//color: "black",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},

		{
			linkFrom: "50",
			linkTo: "64",
			isStrongLine : 2,
			//color: "black",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "50",
			linkTo: "77",
			//isStrongLine : 2,
			color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "51",
			linkTo: "50",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "51",
			linkTo: "66",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "51",
			linkTo: "52",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "52",
			linkTo: "68",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "53",
			linkTo: "56",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			dashedOrNot: true,//Only if the line is dashed
		},

		{
			linkFrom: "55",
			linkTo: "93",
			//isStrongLine : 2,
			color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "56",
			linkTo: "70",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "56",
			linkTo: "58",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "57",
			linkTo: "69",
			isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "58",
			linkTo: "59",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "59",
			linkTo: "73",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "59",
			linkTo: "60",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "60",
			linkTo: "77",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "62",
			linkTo: "85",
			isStrongLine : 2,
			color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "63",
			linkTo: "73",
			isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "64",
			linkTo: "89",
			//isStrongLine : 2,
			color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "64",
			linkTo: "73",
			isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "64",
			linkTo: "65",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "65",
			linkTo: "78",
			isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "65",
			linkTo: "80",
			isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "66",
			linkTo: "79",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "69",
			linkTo: "82",
			isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "69",
			linkTo: "91",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "70",
			linkTo: "83",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "71",
			linkTo: "84",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "73",
			linkTo: "86",
			isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},


		{
			linkFrom: "76",
			linkTo: "85",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "77",
			linkTo: "85",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "78",
			linkTo: "86",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "78",
			linkTo: "91",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "80",
			linkTo: "83",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "81",
			linkTo: "94",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},


		{
			linkFrom: "82",
			linkTo: "97",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},

		{
			linkFrom: "84",
			linkTo: "98",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "87",
			linkTo: "98",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "88",
			linkTo: "99",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "88",
			linkTo: "98",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "94",
			linkTo: "101",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "94",
			linkTo: "102",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "94",
			linkTo: "103",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "95",
			linkTo: "101",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "95",
			linkTo: "102",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "95",
			linkTo: "103",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "96",
			linkTo: "101",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "96",
			linkTo: "102",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "96",
			linkTo: "103",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "96",
			linkTo: "95",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "98",
			linkTo: "99",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "100",
			linkTo: "99",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "100",
			linkTo: "101",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},
		{
			linkFrom: "102",
			linkTo: "101",
			//isStrongLine : 2,
			//color: "red",//Puede o no existir
			//dashedOrNot: true,//Only if the line is dashed
		},


		//END Loading links
		//END Loading links

	];*/
	//END Data Array


	var dataBackend = [
		{"id":1,"description":"DRIVERS","isAGroup":true,"linkedGroup":"","color":"#FFC000"},{"id":2,"description":"KEAS","isAGroup":true,"linkedGroup":"","color":"#FEA3A2"},{"id":3,"description":"ECOSYSTEMS","isAGroup":true,"linkedGroup":"","color":"#CC97FF"},{"id":"driver2","description":"Titus Locks","attributes":"0,0,0,0,0,0,0,0,0,0,0,0,0","linkedGroup":1,"isAGroup":false},{"id":"kea4","description":"Quisquam beatae fuga sed ipsum et. Illum alias sint aspernatur dolor et enim. Ad dolorem ipsam saepe nihil. Commodi dolores amet repellendus.","attributes":"1,2,3,4,1,2,2,2,2,0,0,0,0,0","linkedGroup":2,"isAGroup":false},{"id":"kea5","description":"Qui ut ut et consequuntur id alias culpa. Voluptatem reprehenderit fugit odio. Cupiditate odio accusantium et. Odio cum aperiam aut adipisci est mollitia nesciunt ea.","attributes":"1,2,3,4,1,2,2,2,2,0,0,0,0,0","linkedGroup":2,"isAGroup":false},{"id":"kea6","description":"Ipsam commodi sunt nobis facilis ex consequatur maxime veniam. Porro et dolor quis quia eos. Non sed nemo voluptas sit non.","attributes":"1,2,3,4,1,2,2,2,2,0,0,0,0,0","linkedGroup":2,"isAGroup":false},{"id":"ecosystem5","description":"description","attributes":"0,0,0,0,0,0,0,0,0,0,0,0,0","linkedGroup":3,"isAGroup":false},{"id":"ecosystem6","description":"description","attributes":"0,0,0,0,0,0,0,0,0,0,0,0,0","linkedGroup":3,"isAGroup":false},{"id":"ecosystem7","description":"description","attributes":"0,0,0,0,0,0,0,0,0,0,0,0,0","linkedGroup":3,"isAGroup":false},{"id":"ecosystem8","description":"description","attributes":"0,0,0,0,0,0,0,0,0,0,0,0,0","linkedGroup":3,"isAGroup":false},{"linkFrom":"driver2","linkTo":"kea6"},{"linkFrom":"kea4","linkTo":"ecosystem5"},{"linkFrom":"kea4","linkTo":"ecosystem6"},{"linkFrom":"kea4","linkTo":"ecosystem7"},{"linkFrom":"kea5","linkTo":"ecosystem5"},{"linkFrom":"ecosystem8","linkTo":"ecosystem5"},{"linkFrom":"ecosystem8","linkTo":"ecosystem6"}
	];
	//START Reading Data
	var data_json = JSON.parse(JSON.stringify(dataBackend));
	//We need to fill with each element readed on previous line
	var elementsOfModel = [];
	var linksOfModel = [];
	//We iterate over the data readed getting its properties and pushing it into our Array
	for (var i = 0; i < data_json.length; ++i) {

		// i

		if(data_json[i].linkFrom != null){
			//THIS IS A LINK
			var dashedArray = data_json[i].dashedOrNot == true ? [5,5] : null;





			linksOfModel.push({
							to: data_json[i].linkTo,
							from: data_json[i].linkFrom,
							color: data_json[i].color,
							typeOfLink: dashedArray,
							isStrong: data_json[i].strongLine,
						});
		}
		else{
			//THIS IS A NODE
			//var colorsChanged = [];

			//if(data_json[i].attributes != null){
				//alert("hay esto->" + data_json[i].attributes)
			//}

			//colorsChanged = data_json[i].attributes != null ? assignColors(data_json[i].attributes) : null ;

			var hasAttributes = data_json[i].attributes != null;
			/*if(colorsChanged != null){
				alert("hay esto tamb->" + colorsChanged[0]);
				alert("hay esto tamb->" + colorsChanged[1]);
				alert("hay esto tamb->" + colorsChanged[2]);
				alert("hay esto tamb->" + colorsChanged[3]);
				alert("hay esto tamb->" + colorsChanged[4]);
				alert("hay esto tamb->" + colorsChanged[5]);
			}*/

			/*if(hasAttributes){
				alert("esto1-> " + data_json[i].attributes);
				alert("est2o2-> " + data_json[i].attributes.split()[0][0]);
			}*/

			elementsOfModel.push({
						key: data_json[i].id,
						isGroup: data_json[i].isAGroup,
						group: data_json[i].linkedGroup,
						description: data_json[i].description,
						color: data_json[i].color,
						//sizeOfGroup: data_json[i].sizeOfGroup,
						//titleVisible: data_json[i].titleVisible,
						//position: data_json[i].position,
						hasAttributes: hasAttributes,

						//START Loading Attributtes
							/*colorfirstAttribute: colorsChanged != null ? colorsChanged[0] : defaultColor,
							colorsecondAttribute: colorsChanged != null ? colorsChanged[1] : defaultColor,
							colorthirdAttribute: colorsChanged != null ? colorsChanged[2] : defaultColor,
							colorfourthAttribute: colorsChanged != null ? colorsChanged[3] : defaultColor,
							colorfifthAttribute: colorsChanged != null ? colorsChanged[4] : defaultColor,
							colorsixthAttribute: colorsChanged != null ? colorsChanged[5] : defaultColor,*/
							squareOne: hasAttributes ? assignColors(data_json[i].attributes.split()[0][0]) : "",
							squareTwo: hasAttributes ? assignColors(data_json[i].attributes.split()[0][2]) : "",
							squareThree: hasAttributes ? assignColors(data_json[i].attributes.split()[0][4]) : "",
							squareFour: hasAttributes ? assignColors(data_json[i].attributes.split()[0][6]) : "",
							squareFive: hasAttributes ? assignColors(data_json[i].attributes.split()[0][8]) : "",
							squareSix: hasAttributes ? assignColors(data_json[i].attributes.split()[0][10]) : "",
							squareSeven: hasAttributes ? assignColors(data_json[i].attributes.split()[0][12]) : "",
							squareEight: hasAttributes ? assignColors(data_json[i].attributes.split()[0][14]) : "",
							squareNine: hasAttributes ? assignColors(data_json[i].attributes.split()[0][16]) : "",
							squareTen: hasAttributes ? assignColors(data_json[i].attributes.split()[0][18]) : "",
							squareEleven: hasAttributes ? assignColors(data_json[i].attributes.split()[0][20]) : "",
							squareTwelve: hasAttributes ? assignColors(data_json[i].attributes.split()[0][22]) : "",
							squareThirteen: hasAttributes ? assignColors(data_json[i].attributes.split()[0][24]) : "",
							squareFourteen: hasAttributes ? assignColors(data_json[i].attributes.split()[0][26]) : "",
							//colorsecondAttribute: colorsChanged[1],
							//colorthirdAttribute:  colorsChanged[2],
							//colorfourthAttribute:  colorsChanged[3],
							//colorfifthAttribute:  colorsChanged[4],
							//colorsixthAttribute:  colorsChanged[5],

							//END Loading properties
					});
		}
	}
	//END Reading Data

	//START Creating Model
	//We declare our Graph Object
	const $ = go.GraphObject.make;
	//We linked the DIV Id to the diagram


	const canva =
        $(go.Diagram,  // must be the ID or reference to div
          {
			 //  allowDrop: true,
			//"animationManager.isEnabled": false,
			//"undoManager.isEnabled": false,
			//isReadOnly: true,
			//allowVerticalScroll: false,
			//allowHorizontalScroll: false,
			initialAutoScale: go.Diagram.Uniform,
			initialContentAlignment: go.Spot.Center,  //ESTE ES EL BUENO PARA MOVER A TODOS LOS GRUPOS
			  //layout: $(go.LayeredDigraphLayout)
			//initialContentAlignment: go.Spot.Top,
            /*layout: $(go.LayeredDigraphLayout,
              {
			  //comparer: go.GridLayout.smartComparer,
			  //wrappingColumn:6
			  direction: 90,
			  columnSpacing: 50,
			  setsPortSpots: false,
			  }),*/

			 layout: $(go.GridLayout,
            {
              wrappingWidth: Infinity, alignment: go.GridLayout.Position,
              cellSize: new go.Size(1, 1), spacing: new go.Size(80, 80)
            })

            // other properties are set by the layout function, defined below
          });


	//canva.layout.isInitial = true;
	//canva.layout.isOngoing = true;


	//We link and draw
	canva.model = new go.GraphLinksModel(elementsOfModel, linksOfModel);
	//We define a template for Nodes


	  canva.nodeTemplate =  $(go.Node, "Horizontal",{
		  avoidable: true,
		  //avoidableMargin: new go.Margin(30, 2, 2, 2),
		  //alignment: go.Spot.TopLeft,
	  //fromSpot: go.Spot.Right,  // coming out from middle-right
        //toSpot: go.Spot.Left
		},   // going into at middle-left
	  //{ locationSpot: go.Spot.Center},
	    // TwoWay Binding
	  $(go.Panel, "Auto",
		$(go.Shape, "RoundedRectangle",{fill: "rgba(128,128,128,0.33)"},//Filled gray
		  new go.Binding("fill", "color")),

		$(go.TextBlock,
		  { margin: 10, font: "10px sans-serif", editable: false,
			overflow: go.TextBlock.OverflowClip,
			width: 150, height: 60
		  },
		  new go.Binding("text", "description")),
		),


		//PANEL DE LA IMAGEN

		$(go.Panel, "Vertical",new go.Binding("visible", "hasAttributes"),
			  $(go.Panel, "Horizontal",
							$(go.Panel, "Auto",
							  $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
								  new go.Binding("fill", "squareOne"))
							  ),
							  $(go.Panel, "Auto",
							  $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
								  new go.Binding("fill", "squareTwo"))
							  ),
							  $(go.Panel, "Auto",
							  $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
								  new go.Binding("fill", "squareThree"))
							  ),
							  $(go.Panel, "Auto",
							  $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
								  new go.Binding("fill", "squareFour"))
							  ),
			  ),
			  $(go.Panel, "Horizontal",
							$(go.Panel, "Auto",
							  $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
								  new go.Binding("fill", "squareFive"))
							  ),
							  $(go.Panel, "Auto",
							  $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
								  new go.Binding("fill", "squareSix"))
							  ),
							  $(go.Panel, "Auto",
							  $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
								  new go.Binding("fill", "squareSeven"))
							  ),
							  $(go.Panel, "Auto",
							  $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
								  new go.Binding("fill", "squareEight"))
							  ),
			  ),
			  $(go.Panel, "Horizontal",
							$(go.Panel, "Auto",
							  $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
								  new go.Binding("fill", "squareNine"))
							  ),
							  $(go.Panel, "Auto",
							  $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
								  new go.Binding("fill", "squareTen"))
							  ),
							  $(go.Panel, "Auto",
							  $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
								  new go.Binding("fill", "squareEleven"))
							  ),
							  $(go.Panel, "Auto",
							  $(go.Shape, "Rectangle", { width: 20, height: 20, fill: "rgba(128,128,128,0.33)"},
								  new go.Binding("fill", "squareTwelve"))
							  ),
			  ),
			  $(go.Panel, "Horizontal",
							$(go.Panel, "Auto",
							  $(go.Shape, "Rectangle", { width: 40, height: 20, fill: "rgba(128,128,128,0.33)"},
								  new go.Binding("fill", "squareThirteen"))
							  ),
							  $(go.Panel, "Auto",
							  $(go.Shape, "Rectangle", { width: 40, height: 20, fill: "rgba(128,128,128,0.33)"},
								  new go.Binding("fill", "squareFourteen"))
							  ),
			  )
	  )



	  );










	   /*canva.groupTemplate =
    $(go.Group, "Vertical",

	  $(go.Panel, "Auto",
        $(go.Shape, "RoundedRectangle",
		  new go.Binding("fill", "color"),
		  new go.Binding("visible", "titleVisible")
		  ),
		$(go.TextBlock,
        {
			//alignment: go.Spot.Left,
			margin: 10,
		font: "10pt Sans-Serif", editable: false  },
        new go.Binding("text", "description"))
      ),

	  $(go.Panel, "Auto",
        $(go.Shape, "RoundedRectangle",
          {fill: "rgba(128,128,128,0.33)" }),//Filled gray
        $(go.Placeholder, { padding: 20})  // Space between each group
      ),
    );*/



 canva.groupTemplate =
    $(go.Group, "Auto",
      // declare the Group.layout:
      {
	  alignment: go.Spot.TopLeft,
	  avoidable: true,
	  //computesBoundsIncludingLocation: true,
	  //locationSpot: go.Spot.TopLeft
	  //margin: new go.Margin(0, 100, 30, 0),
	  /*layout: $(go.GridLayout,{
	  wrappingColumn: 2
	  })},*/
	  selectionAdornmentTemplate: $(go.Adornment, "Auto"),
		layout: $(go.GridLayout, {
			wrappingColumn: 2,
			//spacing: go.Size.parse("50 50")
		})

	},

	  //new go.Binding("location", "position", go.Point.parse),
	  //new go.Binding("wrappingColumn", "sizeOfGroup"),
      $(go.Shape, "RoundedRectangle",  {fill: "rgba(128,128,128,0.33)" } ,
		  new go.Binding("fill", "color"),
		  //new go.Binding("visible", "titleVisible")
		  ),
      $(go.Panel, "Vertical",  // position header above the subgraph
        $(go.TextBlock,     // group title near top, next to button
		{margin: 6,
			font: "10pt Sans-Serif",
		editable: false  },
          new go.Binding("text", "description")),
        $(go.Placeholder,     // represents area for all member parts
          { padding: 30,

		  background: "white",
		  alignment: go.Spot.Top,
		  })
      )
    );












	canva.linkTemplate =
    $(go.Link,
      { routing: go.Link.AvoidsNodes, corner: 15,
	  curve: go.Link.JumpOver,reshapable: true,
resegmentable: true,
relinkableFrom: true,
relinkableTo: true,
	  },
      $(go.Shape,
      new go.Binding("stroke", "color"),
	  new go.Binding("strokeDashArray", "typeOfLink"),
	  new go.Binding("strokeWidth", "isStrong")
	  ),

      $(go.Shape, { toArrow: "Standard" },
	  new go.Binding("stroke", "color"),
	  new go.Binding("fill", "color"),
	  new go.Binding("strokeWidth", "isStrong")
	  )
    );

	 /*canva.linkTemplate =
      $(go.Link,
        { curve: go.Link.Bezier, toShortLength: 1,
          fromEndSegmentLength: 30, toEndSegmentLength: 30, routing: go.Link.AvoidsNodes},
        $(go.Shape, { strokeWidth: 2, stroke: "#333" }),
        $(go.Shape, { toArrow: "OpenTriangle" }));*/

		/*canva.linkTemplate =
        $(go.Link,
          { selectable: false },
          $(go.Shape,
            { strokeWidth: 3, stroke: "#333" }));*/

		/*canva.linkTemplate =
      $(go.Link,
        { routing: go.Link.AvoidsNodes, corner: 10 },
        $(go.Shape),
        $(go.Shape, { toArrow: "OpenTriangle" })
      );*/

	/*canva.layout = $(go.GridLayout,
					{
						wrappingColumn: 6,
						alignment: go.GridLayout.Position,
					});*/


}

function assignColors(colorsFromBackend){

	//return colorsFromBackend == "1" ? "#2D572C" : (colorsFromBackend == "2" ? "#5E8F32": (colorsFromBackend == "3" ? "#FAB710" : (colorsFromBackend == "4" ? "#C02929" : "")));


	//var colors = colorsFromBackend.split(",");
	var colors;
//	= colorsFromBackend.split(",");

	//for (var i = 0; i < colors.length; ++i) {
		switch (colorsFromBackend){
			case "1":
				colors = "#2D572C";
				break;
			case "2":
				colors = "#5E8F32";
				break;
			case "3":
				colors = "#FAB710";
				break;
			case "4":
				colors = "#C02929";
				break;
		}
	//}
	return colors;
}
