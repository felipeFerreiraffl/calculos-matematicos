import { BiLogoGithub, BiLogoInstagramAlt, BiLogoLinkedinSquare } from "react-icons/bi";
import "./styles.css";
import { motion } from "framer-motion";

export default function ContatosApresentacao() {
    return (
        <motion.div className="contatos-apresentacao"
            initial={{ x: -window.innerWidth }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5 }}
        >
            <div className="contatos-texto">
                <p className="contatos-nome">Felipe Ferreira Lima</p>
                <p className="contatos-idade">20 anos</p>
                <p className="contatos-alt">
                    Estudante de desenvolvimento de sistemas do
                    <br />
                    <a
                        className="contatos-link"
                        href="https://sp.senai.br/unidade/suicobrasileira/"
                        target="blank"
                    >
                        Senai Suiço-Brasileiro Paulo Ernesto Tolle
                    </a>
                </p>
            </div>
            <div className="contatos-redes-sociais">
                <p className="contatos-redes-titulo">Redes Sociais</p>
                <div className="contatos-icon-area">
                    <a href="https://github.com/felipeFerreiraffl" target="blank">
                        <BiLogoGithub className="contatos-icon" />
                    </a>
                    <a href="https://www.instagram.com/felipe_ffl7/" target="blank">
                        <BiLogoInstagramAlt className="contatos-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/felipe-ferreira-959bb8271/" target="blank">
                        <BiLogoLinkedinSquare className="contatos-icon" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}