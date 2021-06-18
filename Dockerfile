FROM openjdk:16

MAINTAINER Dung Dao <dung.dao@hotmail.de>

ADD backend/target/hatschi-capstone.jar app.jar

CMD [ "sh", "-c", "java -jar /app.jar" ]