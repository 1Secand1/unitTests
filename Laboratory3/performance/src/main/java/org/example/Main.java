package org.example;

import java.lang.management.ManagementFactory;
import java.lang.management.MemoryMXBean;
import java.lang.management.MemoryUsage;
import java.util.concurrent.ThreadLocalRandom;

public class Main {
    public static void main(String[] args) {
        final int SIZE = 10;
        final double LOWER_BOUND = -10;
        final double UPPER_BOUND = 10.0;

        long startTime = System.nanoTime();

        double[] array = ThreadLocalRandom.current().doubles(SIZE, LOWER_BOUND, UPPER_BOUND).toArray();

        double minPositive = Double.MAX_VALUE;
        for (double num : array) {
            if (num > 0 && num < minPositive) {
                minPositive = num;
            }
        }

        System.out.println("Минимальный положительный: " + minPositive);

        long endTime = System.nanoTime();
        long duration = (endTime - startTime) / 1_000_000;
        System.out.println("Время выполнения:" + duration + " мс.");

        Runtime runtime = Runtime.getRuntime();
        long totalMemory = runtime.totalMemory();
        long freeMemory = runtime.freeMemory();
        long usedMemory = totalMemory - freeMemory;
        System.out.println("Oперативная: " + usedMemory + " б");

        MemoryMXBean memoryBean = ManagementFactory.getMemoryMXBean();
        MemoryUsage heapMemoryUsage = memoryBean.getHeapMemoryUsage();
        usedMemory = heapMemoryUsage.getUsed();
        System.out.println("Внутренняя: " + usedMemory + " б");
    }
}
