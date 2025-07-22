import java.util.Random;
import java.util.Scanner;

public class TabuadaQuiz {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        System.out.println("🧠 Bem-vindo ao Quiz da Tabuada com Erros!");
        System.out.print("Digite um número para iniciar o quiz da tabuada: ");
        int numero = scanner.nextInt();

        int acertos = 0;

        for (int i = 1; i <= 10; i++) {
            boolean mostrarErro = random.nextBoolean();
            int resultadoCorreto = numero * i;
            int resultadoMostrado = mostrarErro ? resultadoCorreto + random.nextInt(5) + 1 : resultadoCorreto;

            System.out.println("\n" + numero + " x " + i + " = " + resultadoMostrado);
            System.out.print("Esse resultado está certo? (s/n ou sim/nao): ");
            String resposta = scanner.next().toLowerCase();

            boolean usuarioAcertou =
                (resultadoMostrado == resultadoCorreto && (resposta.equals("s") || resposta.equals("sim"))) ||
                (resultadoMostrado != resultadoCorreto && (resposta.equals("n") || resposta.equals("nao")));

            if (usuarioAcertou) {
                System.out.println("✔️ Boa, você acertou!");
                acertos++;
            } else {
                System.out.println("❌ Ops! Resposta errada. O correto seria " + resultadoCorreto);
            }
        }

        System.out.println("\n🎯 Fim do quiz! Você acertou " + acertos + " de 10.");

        if (acertos == 10) {
            System.out.println("🌟 Você é um mestre da tabuada!");
        } else if (acertos >= 7) {
            System.out.println("👏 Muito bem, quase lá!");
        } else {
            System.out.println("🤔 Vamos praticar mais e tentar de novo!");
        }
    }

}
