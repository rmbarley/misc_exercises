public class Main {
    public static void main(String[] args) {
        System.out.println(BarkingDog.shouldWakeUp(true, 1)); // False
        System.out.println(BarkingDog.shouldWakeUp(false, 2)); // True
        System.out.println(BarkingDog.shouldWakeUp(true, 8)); // False
        System.out.println(BarkingDog.shouldWakeUp(true, -1)); // True
    }
}