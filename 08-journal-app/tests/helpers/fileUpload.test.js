import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({ 
    cloud_name: 'dqf5buxhi', 
    api_key: '434678388191695',
    api_secret: '5doJmGcQl3QFo1wK2SjH0sSZ1Pk',
    secure: true
  }); 

describe('Pruebas en fileUpload', () => { 
    
    test('Debe subir el archivo correctamente a Cloudinary y borrarlo', async() => { 
        
        const imageUrl = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload(file);
        expect(typeof url).toBe('string');

        console.log(url);
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.png', '');

        await cloudinary.api.delete_resources(['journal/' + imageId], {
            resource_type: 'image'
        });


    })

    

})