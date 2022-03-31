/* Fichier de configuration */

module.exports = function(eleventyConfig) {
      eleventyConfig.addPassthroughCopy("./src/images");
      eleventyConfig.addPassthroughCopy("./src/css/");
      eleventyConfig.addPassthroughCopy("./src/javascript");
      eleventyConfig.addPassthroughCopy("./src/_includes");
  
    return {
        dir: {
            input : "src",
            output : "public"
        }
    }
}