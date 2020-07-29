import cloudinary from 'cloudinary';
import { fileUpload } from './../../helpers/fileUpload';

cloudinary.config({
    cloud_name: 'djd4dcte5',
    api_key: '221462547663194',
    api_secret: 'zXACfjp79M6WXIreseug49ahQ5c'
});

describe('Pruebas en fileUpload.js', () => {

    test('debe de cargar un archivo y retornal el URL', async (done) => {

        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);

        //console.log(url);
        expect(typeof url).toBe('string');

        // Borrar imagen por ID
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.png', '');
        //console.log(imageId);

        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            done();
        });

    });

    test('debe de retornar un error', async () => {

        const file = new File([], 'foto.png');
        const url = await fileUpload(file);

        //console.log(url);
        expect(url).toBe(null);

    });

});
