import "./styles.css";
import logo from "../../assets/logo.svg";
import HomeBotao from "../../components/Home/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePagina() {
    return (
        <motion.div 
            className="home-pagina"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
        >
            <img className="home-logo" src={logo} alt="Cálculos" />
            <motion.div 
                className="home-botao-area"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.7 }}
            >
                <Link to={"/sobre"}><HomeBotao texto={"Sobre"} /></Link>
                <Link to={"/calculos"}><HomeBotao texto={"Cálculos"} /></Link>
                <Link to={"/contatos"}><HomeBotao texto={"Contatos"} /></Link>
            </motion.div>
        </motion.div>
    );
}