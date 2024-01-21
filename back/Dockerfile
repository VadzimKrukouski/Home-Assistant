FROM openjdk:8-slim as build
LABEL maintainer="Vadzim Krukouski"
COPY build/libs/*.jar app.jar
RUN mkdir -p build/dependency && (cd build/dependency; jar -xf /app.jar)

FROM openjdk:8-slim
VOLUME /tmp
ARG DEPENDENCY=/build/dependency
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app
ENTRYPOINT ["java","-cp","app:app/lib/*","com.example.back.BackApplication"]