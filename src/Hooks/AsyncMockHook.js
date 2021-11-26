import { useEffect, useState } from "react";

export const useAsyncMock = (timeout) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fakeFetch(timeout)
            .then(res => {
                setData(res);
            })
    },[]);
    return([data]);
}

export const useAsyncMockById = (timeout, id) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fakeFetch(timeout)
            .then(res => {
                setData(res[id]);
            })
    },[]);
    return([data]);
}

function fakeFetch(timeout) {
    return new Promise((resolve,reject) => {
        setTimeout(function() {
            console.log('downloading finished');
            resolve(mockArray);
        }, timeout);
        console.log('download start...');
    });
}

const mockArray = [
    {
        id: 0,
        title: 'Zapatillas running topper dottir',
        description: 'Confort extremo en un calzado muy liviano y deportivo. Diseñada para corredores con pisada neutra.',
        price: 6699,
        image: 'https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-running-topper-dottir-azul-800010026317001-1.jpg'
    },{
        id: 1,
        title: 'Sony PlayStation 5 825GB',
        description: 'Guardá tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 825 GB. Al contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición. Por otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras jugás.',
        price: 178216,
        image: 'https://fravega.vteximg.com.br/arquivos/PS5-2020-ps5.png?v=637345082997600000'
    },{
        id: 2,
        title: 'Heladera Samsung RT32K5070, con freezer 321L',
        description: 'La disposición de 4 estantes te va a proporcionar un gran ahorro de espacio y fácil localización de tus productos. Gracias a su resistente material no vas a tener que preocuparte por el peso que deposites en ellos y organizarás a tu gusto cada rincón para optimizar su uso. cuenta con 1 repisa y una capacidad de 72 litros, que te va a facilitar la distribución y el orden de tus congelados.',
        price: 90999,
        image: 'https://images.samsung.com/is/image/samsung/ar-rt29k577js8b3-rt29k577js8-b3-frontsilver-312234036?$720_576_PNG$'
    },{
        id: 3,
        title: 'Moto G20 64 GB azul cielo 4 GB RAM',
        description: 'Celular gama media, con cuatro camaras traseras y una delantera, pantalla IPS de 6,5\", detector de huellas y reconocimiento facial.',
        price: 29999,
        image: 'https://armoto.vteximg.com.br/arquivos/ids/160582-700-700/moto-g20-azulcielo-pdpx1.png?v=637703444160270000'
    },{
        id: 4,
        title: 'Laptop Legion 7 6ta Gen (16", AMD)',
        description: 'Primera laptop para gaming QHD de 16" del mundo',
        price: 239999,
        image: 'https://www.lenovo.com/medias/lenovo-laptop-gaming-legion-7-16in-amd-gallery-2.png?context=bWFzdGVyfHJvb3R8NzM0ODR8aW1hZ2UvcG5nfGhlNy9oNDUvMTEzODQ1NDE3MDgzMTgucG5nfDEzOWMzNWJlMDE2MmYyM2M4MjFiMTFlZTE2ZWQwZjQ0NWM3OGI2YjYyY2Y3MjUzMzBlM2NkMzNjZjgwYTdlYzE'
    },{
        id: 5,
        title: 'Smart TV Samsung Series 7 UN50TU7000GCZB LED 4K 50\"',
        description: 'Con el Smart TV UN50TU7000 vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.',
        price: 72999,
        image: 'https://images.samsung.com/is/image/samsung/ar-ru7100-un50ru7100gxzb-frontblack-184474325?$684_547_PNG$'
    },{
        id: 6,
        title: 'Nintendo Switch 32GB Standard',
        description: 'Nintendo Switch es una consola desmontable, que puede usarse en modo portátil, sobremesa o en la TV; esto te brindará la posibilidad de utilizarla donde quieras y compartir sus controles.',
        price: 81479,
        image: 'https://assets.nintendo.com/image/upload/ncom/en_US/switch/split-cta-system-mobile'
    },{
        id: 7,
        title: 'Auriculares inalámbricos Sony WH-CH510',
        description: 'Al ser on-ear se apoyan en tus orejas cómodamente y ofrecen una gran calidad de sonido. Usalos en viajes largos o actividades al aire libre.',
        price: 4449,
        image: 'https://www.sony.com.ar/image/b789488955522f13ffb4778bd08465c6?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320'
    }
]