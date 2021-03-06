import { toMidiSimple, toMidiWhiteKeys } from "./notemap";
import Fn from "./Fn";
import Expr from "./Expr";

class MathFunction {
    constructor(fn, start, end, step) {
        this.str = fn;
        this.fn = new Fn(fn);
        this.start = new Expr(start).eval();
        this.end = new Expr(end).eval();
        this.step = new Expr(step).eval();
    }

    values() {
        const r = range(this.start, this.end, this.step);
        return r.map((t) => [t, this.fn.eval(t)]);
    }

    // generates sheet music from
    // abc(bpm, n16, values) {}

    // Generates whole sequence of notes from start to end with duration step.
    notes(start, duration, whiteonly) {
        const values = this.values();
        return values.map(([, v], i) =>
            this.valToNote(v, start + i * duration, duration, whiteonly)
        );
    }

    valToNote(v, start, duration, whiteonly) {
        let midi = toMidiSimple(v);
        if (whiteonly) {
            midi = toMidiWhiteKeys(v);
        }
        return Note(midi, start, duration);
    }
}

function Note(midi, start, duration) {
    return { midi: midi, start: start, duration: duration };
}

function range(start, stop, step = 1) {
    let r = [];
    for (let i = start; i < stop; i += step) {
        r.push(i);
    }
    return r;
}

export default MathFunction;
