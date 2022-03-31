/* Fichier de configuration */

module.exports = function(eleventyConfig) {
      eleventyConfig.addPassthroughCopy("./src/images");
      eleventyConfig.addPassthroughCopy("./src/css/");
      eleventyConfig.addPassthroughCopy("./src/javascript");
  
    return {
        dir: {
            input : "src",
            output : "public"
        }
    }
}