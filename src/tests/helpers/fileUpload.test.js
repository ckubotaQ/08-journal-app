import cloudinary from "cloudinary";
import { fileUpload } from "../../helpers/fileUpload";


cloudinary.config({ 
    cloud_name: 'gkubota', 
    api_key: '613246146293953', 
    api_secret: 'vuuewD3JkesHK52h5Jm0YGI_Q5M',
    secure: true
  });
describe('Pruebas de fileUpload', () => {
    test('debe de cargar un archivo y retornar la URL', async() => {
        jest.setTimeout(10000)
        const resp = await fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QW7mWQuFHEHgm3YgvVidvSlufFCL3LJoqg&usqp=CAU');
        const blob = await resp.blob();
        const file = new File([blob],'foto.png');
        const url =  await fileUpload(file);
        expect(typeof url).toBe('string');
        //borrar imagen
        const segments = url.split('/');
        const imageId= segments[segments.length - 1].replace(".jpg","");
        const { deleted } = await cloudinary.v2.api.delete_resources(imageId);
        expect(deleted).toEqual({ [imageId]: "deleted" });


    })
    
})
