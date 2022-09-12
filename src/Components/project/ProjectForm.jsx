export default function ProjectForm() {
    return (
        <form>Projeto
            <div>
                <input type="text" placeholder="" />
            </div>
            <div><input type="number" placeholder="" />
            </div>
            <div>
                <select name="category_ID" id="">
                    <option disabled>Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar Projeto" />
            </div>
        </form>
    )
}