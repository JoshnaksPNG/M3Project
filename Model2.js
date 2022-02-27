
let U = 0;
let P = 0;

function DeenMethod(I, B, T, x, X, y, Y, z, Z, C, H, D) {
 U = T(X * x + Y * y + Z * z);
 P = I * B * (-(1 / (Y + ((Y * C) / 60 * H)) + 1)) * U * D;
}