import SobreApresentacao from "../../components/Sobre/Apresentacao";
import HeaderVoltar from "../../components/VoltarHeader";
import "./styles.css";
import { motion } from "framer-motion";

export default function SobrePagina() {
    return (
        <motion.div className="sobre-pagina"
            initial={{ y: window.innerHeight }}
            animate={{ y: 0 }}
            exit={{ y: window.innerHeight }}
            transition={{ duration: 0.7 }}
        >
            <HeaderVoltar />
            <motion.div className="sobre-apresentacao-area"
                initial={{ x: -window.innerWidth }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5 }}
            >
                <SobreApresentacao />
            </motion.div>
        </motion.div>
    );
}