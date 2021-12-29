FROM openjdk:16

MAINTAINER Phuong Dung Dao <dung.dao@hotmail.de>

ADD backend/target/hatschi-capstone.jar app.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -jar /app.jar" ]