module Jekyll
  module ModuloFilter
    # Returns the modulo of the input based on the supplied modulus
    # Called 'mod' to avoid conflict with newer Liquid's 'modulo' filter
    def mod(input, modulus)
      input.to_i % modulus.to_i
    end
  end
end

Liquid::Template.register_filter(Jekyll::ModuloFilter)
