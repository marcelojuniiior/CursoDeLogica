package br.com.logicaprogramacao.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/exerciciosRepetitivas")
public class eRepetitivaController {
    @RequestMapping("/")
    public ModelAndView exerciciosRepetitiva() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("exerciciosRepetitivas.html");
        return modelAndView;
    }

    @RequestMapping("/crescente")
    public ModelAndView crescente() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("crescente.html");
        return modelAndView;
    }

    @RequestMapping("/senha_fixa")
    public ModelAndView senha_fixa() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("senha_fixa.html");
        return modelAndView;
    }

    @RequestMapping("/tabuada")
    public ModelAndView tabuada() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("tabuada.html");
        return modelAndView;
    }

    @RequestMapping("/somaImpares")
    public ModelAndView somaImpares() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("somaImpares.html");
        return modelAndView;
    }
}
