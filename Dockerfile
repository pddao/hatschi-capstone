FROM openjdk:16

MAINTAINER Dung Dao <dung.dao@hotmail.de>

ADD backend/target/hatschi-capstone.jar app.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGO_DB_URI -jar /app.jar" ]