import { ContainerCabecalho } from "../Cabecalho/styled";
export default function Index() {
    return ( 
<ContainerCabecalho>

    <div class="left-box">
        <header class="header-left-box">
            <div class="svg-cabecalho-left-box"> <img src= "/imgs/book.svg"  alt=""/> </div>
            <div class="devSchool"> <span>Dev</span>School</div>
        </header>
        <div class="black-box"></div>
        <div class="left-box-management">
            <div> Gerenciamento </div>
            <img src= "../../public/imgs/chevron-down.svg" alt="" />
        </div>
        <div class="left-box-aluno">
            <div> Alunos </div>
        </div> 
    </div>

</ContainerCabecalho>
    );
}
