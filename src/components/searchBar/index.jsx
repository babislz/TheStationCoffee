import { InputWrapper, Input, InputImage } from "./styles"
import Lupe from "../../../public/lupe.svg"

const SearchBar = () => {
    return(
        <InputWrapper>
            <Input type="text" placeholder="Pesquisar..." />
            <InputImage src={Lupe} alt="icon" />
        </InputWrapper>
    )
}

export default SearchBar;