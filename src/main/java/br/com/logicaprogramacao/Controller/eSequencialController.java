package br.com.logicaprogramacao.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/exerciciosSequenciais")
public class eSequencialController {
    @RequestMapping("/")
    public ModelAndView exerciciosSequenciais() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("exerciciosSequenciais.html");
        return modelAndView;
    }

    @RequestMapping("/terreno")
    public ModelAndView paginaTerreno() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("terreno.html");
        return modelAndView;

    }

    @RequestMapping("/triangulo")
    public ModelAndView paginaTriangulo() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("triangulo.html");
        return modelAndView;

    }

    @RequestMapping("/idade")
    public ModelAndView idade() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("idade.html");
        return modelAndView;

    }

    @RequestMapping("/soma")
    public ModelAndView soma() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("soma.html");
        return modelAndView;

    }

    @RequestMapping("/troco")
    public ModelAndView troco() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("troco.html");
        return modelAndView;
    }

}
