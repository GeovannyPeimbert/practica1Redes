module.exports = async function (context, req) {
    context.log('Generating Nonsense...');
    context.res = {
        body: "Hola, soy Gio, practica 1 de redes"
    };
};