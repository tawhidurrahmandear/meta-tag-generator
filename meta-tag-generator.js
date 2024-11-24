// Meta Tag Generator
// developed by Tawhidur Rahman Dear, https://www.tawhidurrahmandear.com
// Live Preview available at https://www.devilhunter.net/p/meta-tag-generator.html 

function generateMetaTags() {
      // Get values from the form fields
      var canonicalUrl = document.getElementById("canonical-url").value;
      var language = document.getElementById("language").value;
      var description = document.getElementById("description").value;
      var keywords = document.getElementById("keywords").value;
      var copyright = document.getElementById("copyright").value;
      var author = document.getElementById("author").value;
      var distribution = document.getElementById("distribution").value;
      var rating = document.getElementById("rating").value;
      var classification = document.getElementById("classification").value;
      var robots = document.getElementById("robots").value;
      var revisit = document.getElementById("revisit-after").value;
      var charset = document.getElementById("charset").value;
      var cache = document.getElementById("cache-control").value;

      // Initialize meta string
      var meta = '<!DOCTYPE html>\n';
      meta += '<html lang="' + language + '">\n';
      meta += '<head>\n';

      // Language
      meta += '  <meta name="language" content="' + language + '">\n';

      // Add Charset
      meta += '  <meta charset="' + charset + '">\n';

      // Static Meta Tags
      meta += '  <meta http-equiv="content-type" content="text/html;charset=' + charset + '">\n';

      // Add Meta Tags
      meta += '  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n';
      meta += '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n';
	  
      // Canonical URL
      if (canonicalUrl) {
        meta += '  <link rel="canonical" href="' + canonicalUrl + '">\n';
      }

      // Description
      if (description) {
        meta += '  <meta name="description" content="' + description + '">\n';
      }

      // Keywords
      if (keywords) {
        meta += '  <meta name="keywords" content="' + keywords + '">\n';
      }

      // Copyright
      if (copyright) {
        meta += '  <meta name="copyright" content="' + copyright + '">\n';
      }
	  
      // Author and Meta Author
      if (author) {
        meta += '  <meta name="author" content="' + author + '">\n';
        meta += '  <meta name="meta-author" content="' + author + '">\n';
      }
	  
	  // Distribution
      if (distribution) {
        meta += '  <meta name="distribution" content="' + distribution + '">\n';
      }
	  
      // Rating
      if (rating) {
        meta += '  <meta name="rating" content="' + rating + '">\n';
      }
	  
      // Classification
      if (classification) {
        meta += '  <meta name="classification" content="' + classification + '">\n';
      }
	  
      // Robots
      if (robots) {
        meta += '  <meta name="robots" content="' + robots + '">\n';
      }
	  
      // Revisit after
      if (revisit) {
        meta += '  <meta name="revisit-after" content="' + revisit + '">\n';
      }
	  
      // Cache-Control
      if (cache) {
        meta += '  <meta http-equiv="cache-control" content="' + cache + '">\n';
      }

      // Favicon Links
      meta += '  <link rel="icon" href="/favicon.ico" type="image/x-icon">\n';
      meta += '  <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32">\n';
      meta += '  <link rel="icon" href="/favicon-192x192.png" type="image/png" sizes="192x192">\n';
      meta += '  <link rel="icon" href="/favicon-512x512.png" type="image/png" sizes="512x512">\n';
      meta += '  <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">\n';
      meta += '  <link rel="icon" href="/favicon.svg" type="image/svg+xml">\n';
	  
	  meta += '  // Meta Tag Generator at https://github.com/tawhidurrahmandear/Meta-Tag-Generator \n';

      // Closing Head and Adding Body
      meta += '</head>\n';
      meta += '<body>\n';
      meta += '... ... ...\n';
      meta += '</body>\n';
      meta += '</html>';

      // Output generated meta tags to the textarea
      document.getElementById("metatag").value = meta;
    }

    function clearFields() {
      // Reset all form fields
      document.getElementById("canonical-url").value = "";
      document.getElementById("language").value = "";
      document.getElementById("metatag").value = "";
      document.getElementById("charset").value = "UTF-8";
      document.getElementById("description").value = "";
      document.getElementById("keywords").value = "";
      document.getElementById("copyright").value = "";
      document.getElementById("author").value = "";
      document.getElementById("distribution").value = "global";
      document.getElementById("rating").value = "general";
      document.getElementById("classification").value = "";
      document.getElementById("robots").value = "index, follow";
      document.getElementById("revisit-after").value = "monthly";
      document.getElementById("cache-control").value = "no-cache";
      document.getElementById("canonical-url").focus();
    }