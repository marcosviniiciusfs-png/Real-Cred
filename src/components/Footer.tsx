import { MapPin, Clock, Instagram } from "lucide-react";
import logoMv from "@/assets/logo-mv.png";
import facebookIcon from "@/assets/facebook.png";

const Footer = () => {
  return (
    <footer id="contato" className="bg-[hsl(var(--header-footer))] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex flex-col items-center md:items-start gap-2 mb-4">
              <img src={logoMv} alt="MV Soluções Financeiras" className="h-20 w-20 rounded-full object-cover" />
            </div>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.facebook.com/Jeniffercassemiro03?mibextid=wwXIfr%20P%C3%A1gina%20Facebook&rdid=1N8RVsaIDQk3msff&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CuzD3ow7o%2F%3Fmibextid%3DwwXIfr%2BP%25C3%25A1gina%2BFacebook#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
                aria-label="Facebook da MV Soluções Financeiras">

                <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
              </a>
              <a
                href="https://www.instagram.com/mv_solucoesfin?igsh=MW10azR4MzdlYXF2bw%3D%3D&fbclid=IwY2xjawRtr_ZleHRuA2FlbQIxMABicmlkETFzejQ1MnNqRmFlYVFjOXAzc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHp8u_H-BtlKdcKr13-fyxwJ-_MOELs4tT3Bm91TMYmMAEecDZUAGqAGl8W5p_aem_fA5FcVNA5TO0chHqxJ0Vpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
                aria-label="Instagram da MV Soluções Financeiras">

                <Instagram className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Localização e Horário */}
          <div>
            <h3 className="text-xl font-bold mb-4">Endereço</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90">
                    Rua Bela Vista, 452 – Centro<br />
                    São Bernardo do Campo - SP
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Horário de Atendimento</p>
                  <p className="text-white/90">
                    Segunda à Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/90 text-sm">
              © 2025 Viva Capital. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-white/90 hover:text-white transition-colors">
                Política de Privacidade
              </button>
              <button className="text-white/90 hover:text-white transition-colors">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;