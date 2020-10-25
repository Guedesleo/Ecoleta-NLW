import express from 'express'; 
import routes from './routes';
import cors from 'cors';
import path from 'path';
import {errors} from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname ,'..','uploads')))

app.use(errors());



// Rotas : Endereco completo da nossa requisição 
//Recurso: QUal entidade estamos acessando do sistemas

// GET : BUSCA UMA OU MAIS DO BACH-END
// POST : Criar uma nova informação no back- end
//PUT : Atualizar uma informação existente no back-end
//DELETE : Quando quero remover uma informação do back-end

//tipo de  paramentros request.params , que vem na propria rota que identificam um recurso
// Query params : Parametros que vem na propria rota geralmetne para filtros, paginação
// request.body : Parametros para criação/atualizações de informações


app.listen(3333);