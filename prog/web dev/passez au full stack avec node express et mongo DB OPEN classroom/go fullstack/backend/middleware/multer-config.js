const multer = require('multer');//on crée ine constante storage. à passer à multer comme configuration
const MIME_TYPES = {            //qui contient la logique necessaire pour indiquer à multer où enregistrer incoming files
    'image/jpg' : 'jpg',       //fonction destination indique à multer d'enregistrer les fichiers dans le dossier images
    'image/jpeg' : 'jpg',      //fonction filename indique à multer d'utiliser le nom d'origine, de remplacer les
    'image/png' : 'png'       //espaces par des underscores et add timestamp with Date.now() comme nom de fichier
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null,'./images/');
    
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({storage: storage}).single('image');/* On exporte ensuite l'élément multer entièrerment config
,lui passons notre constante storage et lui indiquons que nous gèrerons uniquement les téléchargements de fichiers images

On doit cependant modifier quelque peu les routes car la structure de données entrantes n'est pas tout à fait la même
avec des fichiers et des données JSON
*/
