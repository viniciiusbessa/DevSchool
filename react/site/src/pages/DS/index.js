import  {Container}  from "./styled";
import Index from "../../components/Cabecalho/index";

import Api from '../../service/api';
import { useState, useEffect } from "react";
const api = new Api();

export default function IndexConteudo () {

const [alunos, setAlunos] = useState([]);
const [nome, setNome] = useState("");
const [chamada, setChamada] = useState("");
const [turma, setTurma] = useState("");
const [curso, setCurso] = useState("");
const [IdAlterando, setIdAlterando] = useState(0);

async function listar () {
    let r = await api.listar();
    setAlunos(r);
}

async function inserir () {
  if (IdAlterando === 0) {
    

    let r = await api.inserir(nome, chamada, turma, curso);
    

    if (r.erro) alert(r.erro);
    else alert('aluno inserido! :)');

  } else {
    let r = await api.alterar(IdAlterando,nome, chamada, turma, curso);
    if (r.erro) alert(r.erro);
    else alert('aluno alterado! ;)');

  }

    LimparCampos();
    listar();
}

async function LimparCampos(){
    setNome("");
    setChamada("");
    setCurso("");
    setTurma("");
    setIdAlterando(0);
}

async function remover (id) {
    let r = await api.remover(id);
    alert('aluno removido! :(');

    listar(r);
}

async function editar (item) {
    setNome(item.nm_aluno);
    setChamada(item.nr_chamada);
    setCurso(item.nm_curso);
    setTurma(item.nm_turma);
    setIdAlterando(item.id_matricula);
    listar();
}

useEffect ( () => {
    listar();
}, [] )


    return (
    <Container>
        <Index/>
        <div class="Box-Site"> 
        <div class="left-box">
            <header class="header-left-box">
                <div class="svg-cabecalho-left-box"> </div>
                <div class="devSchool"> <span>Dev</span>School</div>
            </header>
            <div class="black-box"></div>
            <div class="left-box-management">
                <div> Gerenciamento </div>
                
            </div>
            <div class="left-box-aluno">
                <div> Alunos </div>
            </div> 
        </div>
    
          <div class="right-box"> 
            <div class="reader-right-box">
               <div class = "box-user"> 
                 <div class="user-image">   <div class="absolute">  3   </div>  </div>
                 
                 <div class="user-name"> Olá, <b>  Saitama </b> </div>
                </div>
                <div class="box-image">
                    <div class="refresh-button"> <button>   </button> </div>
                    <div class="left-button"> <button>  </button> </div>
                </div>
            </div>
            <div class="bottom-bar-right-header"> </div>
          
            <div class="body-right-box">
                <div class="new-student-box">
                    <div class="text-new-student">
                        <div class="bar-new-student"></div> 
                        <div class="text-new-student">{IdAlterando === 0 ? "Novo Aluno" : "Alterando Aluno" + IdAlterando}</div>
                    </div>
                    <div class="input-new-student"> 
                        <div class="input-left">
                           <div class="agp-input"> 
                            
                            <div class="name-student"> Nome: </div>  
                            <div class="input"> <input  type= "text" value={nome} onChange={e => setNome(e.target.value)}  /> </div>  
                        </div> 
                        <div class="agp-input">
                            <div class="number-student"> Chamada: </div>  
                            <div class="input"> <input type= "text" value={chamada} onChange={e => setChamada(e.target.value)} /> </div> 
    
                           </div>
                        </div>
                        <div class="input-right">
                         <div class="agp-input">
                            <div class="corse-student"> Curso: </div>  
                            <div class="input"> <input type= "text" value={curso} onChange={e => setCurso(e.target.value)} /> </div>  
                            </div>
                         <div class="agp-input">
                            <div class="class-student"> Turma: </div>  
                            <div class="input"> <input type= "text" value={turma} onChange={e => setTurma(e.target.value)} /> </div> 
                            </div>
                        </div>
                        <div class="button-create"> <button  onClick={inserir}> {IdAlterando === 0 ? "Cadastrar" : "Alterar"} </button> </div>
                    </div>
                </div>
    
                <div class="student-registered-box">
                    <div class="row-bar"> 
                        <div class= "bar-new-student"> </div>
                        <div class="text-registered-student"> Alunos Matriculados </div>
                    </div>
                
                    <table class ="table-user">
                        <thead>
                            <tr>
                                <th > ID </th>
                                <th> Nome </th>
                                <th> Chamada </th>
                                <th> Turma </th>
                                <th> Curso </th>
                                <th class="a"> </th>
                                <th class="a"> </th>
                            </tr>
                        </thead>
                
                        <tbody>

                          {alunos.map((item, i) =>
                                <tr className = { i % 2 === 0 ? "linha-alternada" : "" } >
                                    <td> {item.id_matricula} </td>
                                    <td title = {item.nm_aluno}> {item.nm_aluno != null && item.nm_aluno.length >= 25
                                     ? item.nm_aluno.substr(0, 25) + "..." 
                                     : item.nm_aluno 
                                     
                                     }</td>

                                    <td> {item.nr_chamada} </td>
                                    <td> {item.nm_curso} </td>
                                    <td> {item.nm_turma} </td>
                                    <td className= "a"> <button onClick={() => editar(item)}>  </button> </td>
                                    <td className= "a"> <button onClick={() => remover(item.id_matricula)}> <img src= "/public/imgs/trash-2.svg" alt= ""/>  </button> </td>
                                </tr>
                          )}



                            
    
                            
                        
    
                        
                            
                        </tbody> 
    
                    </table>
              
                </div>
            </div>
        </div>
      </div>
    </Container>
    ); 
}
