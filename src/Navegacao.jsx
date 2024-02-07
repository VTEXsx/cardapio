export function Navegacao(props){
    return <div className="navegacao">
        <input type="radio" name="opcao-pagina" id="0-pagina" defaultChecked onClick={() =>props.atualizarPaginaSelecionada(0)}/>
        <label htmlFor="0-pagina">Pratos Principais</label>
        <input type="radio" name="opcao-pagina" id="1-pagina" onClick={() =>props.atualizarPaginaSelecionada(1)}/>
        <label htmlFor="1-pagina">Sobremesas</label>
        <input type="radio" name="opcao-pagina" id="2-pagina" onClick={() =>props.atualizarPaginaSelecionada(2)}/>
        <label htmlFor="2-pagina">Bebidas</label>
    </div>
}
