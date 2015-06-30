build:
	rm -r dest/* ; cp src/index.html dest/ && ./node_modules/.bin/browserify -e src/index.jsx -t reactify > dest/bundle.js  && open dest/index.html