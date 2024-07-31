package br.com.logicaprogramacao.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/exerciciosCondicionais")
public class eCondicionaisController {
    @RequestMapping("/")
    public ModelAndView exerciciosCondicionais() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("exerciciosCondicionais.html");
        return modelAndView;
    }

    @RequestMapping("/notas")
    public ModelAndView notaFinal() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("notaFinal.html");
        return modelAndView;
    }

    @RequestMapping("/baskara")
    public ModelAndView baskara() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("baskara.html");
        return modelAndView;
    }

    @RequestMapping("/menor_de_tres")
    public ModelAndView menor_de_tres() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("menor_de_tres.html");
        return modelAndView;
    }

    @RequestMapping("/operadora")
    public ModelAndView operadora() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("operadora.html");
        return modelAndView;
    }
}
