let objWithOptionalProperties: {
  userName: string;
  address: string;
  pin?: number;
} = {
  userName: "John Doe",
  address: "Bay Area",
};
let b: null;

// ? using interface
interface man {
  userName: string;
  address: string;
  pin: number;
}

const mobashir: man = {
  userName: "Mobashir",
  address: "Durga Bari Colony",
  pin: 123,
};

// ? Type alises
type Vehicle = {
  move: boolean;
  vehicleName: string;
};

const car: Vehicle = { move: false, vehicleName: "Corola Altis" };
