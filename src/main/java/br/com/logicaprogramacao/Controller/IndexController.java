package br.com.logicaprogramacao.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class IndexController {
    public class ResolvidoTerreno {
        Double areaTerreno;
        Double precoTerreno;

    }

    @RequestMapping("/home")
    public ModelAndView index() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index.html");
        return modelAndView;

    }
}
