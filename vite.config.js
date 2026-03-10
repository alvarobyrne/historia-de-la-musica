import { defineConfig } from 'vite';

export default defineConfig({
    base: 'https://alvarobyrne.github.io/historia-de-la-musica/',
    build:{
        rollupOptions:{
            input: {
                main: 'index.html',
                barroco: 'barroco.html',
                clasicismo: 'clasicismo.html',
                romanticismo: 'romanticismo.html'
            }   
        }
    }
});