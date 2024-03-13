#include <stdio.h>
#include <sys/socket.h>

int main() {
    int socket_desc = socket(AF_INET, SOCK_STREAM, 0);
    if (socket_desc != -1) {
        printf("Socket creado exitosamente.\n");
        // Puedes continuar configurando y utilizando el socket
        close(socket_desc);
    } else {
        perror("Error al crear el socket");
    }
    return 0;
}
