export function calulateBmiMetric (heightCm, weightKg) {
    const heightM = heightCm/100;
    return (weightKg/(heightM * heightM));
}