FROM devopsfaith/krakend:2

COPY krakend.json /etc/krakend/krakend.json

EXPOSE 8080

CMD ["krakend", "run", "-c", "krakend.json", "-d"]
