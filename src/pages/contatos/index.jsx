import "./styles.css"
import Header from "../../components/Header"
import ContatosApresentacao from "../../components/Contatos";
import { motion } from "framer-motion";

export default function ContatosPagina() {
    return (
        <div className="contatos-pagina">
            <Header />
            <ContatosApresentacao />
        </div>
    );
} 