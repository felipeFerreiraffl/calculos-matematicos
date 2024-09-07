import "./styles.css"
import Header from "../../components/Header"
import ContatosApresentacao from "../../components/Contatos";
import { motion } from "framer-motion";

export default function ContatosPagina() {
    return (
        <motion.div className="contatos-pagina"
            initial={{ y: window.innerHeight }}
            animate={{ y: 0 }}
            exit={{ y: window.innerHeight }}
            transition={{ duration: 0.7 }}
        >
            <Header />
            <ContatosApresentacao />
        </motion.div>
    );
} 