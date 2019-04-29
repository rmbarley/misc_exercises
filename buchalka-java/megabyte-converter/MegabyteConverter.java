public class MegabyteConverter {
    public static void printMegaBytesAndKiloBytes(int kiloBytes) {
        if (kiloBytes < 0) {
            System.out.println("Invalid Value");
        } else {
            int megaBytes = kiloBytes / 1024;
            int remainder = kiloBytes % 1024;
            System.out.printf("%d KB = %d MB and %d KB", kiloBytes, megaBytes, remainder);
        }
    }
}