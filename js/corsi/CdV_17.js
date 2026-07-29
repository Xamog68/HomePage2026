var NomeCorso = "Elementi di Calcolo delle Variazioni - 2016/2017";
var Percorso = MEDIA.lezioni + "CdV_17/CdV_17_L";
var CifreNumeroLezione = 2;

var SchedaCorso = {
  nome: "Elementi di Calcolo delle Variazioni",
  annoAccademico: "2016/2017",
  crediti: "6",
  target: "Students in Mathematics",
  anno: "Third year or later",
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "CdV_17_Ufficiale.pdf",
    titolo: "Official presentation"
  },
  {
    sezione: "burocrazia",
    file: "CdV_17_Burocrazia.pdf",
    titolo: "General informations"
  },
  {
    sezione: "burocrazia",
    file: "CdV_17_Esame.pdf",
    titolo: "Exam rules"
  },
  {
    sezione: "burocrazia",
    file: "CdV_17_Programma.pdf",
    titolo: "Detailed program"
  },
  {
    sezione: "book",
    file: "CdV_17_Book.pdf",
    titolo: "Printout of lectures"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1", "28/09/2016", "16:00", "17:00", "Presentation of the main topics of the course through simple examples. Integral functionals in different settings."];
Lezioni[2] = [ "2", "28/09/2016", "17:00", "18:00", "Indirect method in the calculus of variations. Derivative of a functional along a curve and in a given direction. First variation of a functional. Three basic examples of integral functionals depending only on the derivative."];
Lezioni[3] = [ "3", "30/09/2016", "16:00", "17:00", "Fundamental lemma in the calculus of variations and Du Bois Reymond lemma: statements, proofs, discussion of possible variants. Example of minimum problem with an integral constraint."];
Lezioni[4] = [ "4", "30/09/2016", "17:00", "18:00", "Genesis of boundary conditions for Euler equations. Examples of minimum problems originating Dirichlet, Neumann and periodic boundary conditions."];
Lezioni[5] = [ "5", "05/10/2016", "14:00", "15:00", "Different forms of Euler-Lagrange equation: integral, differential, Du Bois Reymond and Erdmann form. Discussion of regularity issues in the derivation. Generalization to Lagrangians depending on higher order derivatives or more unknowns."];
Lezioni[6] = [ "6", "05/10/2016", "15:00", "16:00", "Minimality through convexity. Minimality through auxiliary functional from below (trivial lemma). Examples of application in the case of Lagrangians depending only on the derivative."];
Lezioni[7] = [ "7", "07/10/2016", "16:00", "17:00", "Point-to-curve problems. Transversality conditions."];
Lezioni[8] = [ "8", "07/10/2016", "17:00", "18:00", "Final examples of application of the indirect method."];
Lezioni[9] = [ "9", "12/10/2016", "14:00", "15:00", "Introduction to the direct method. Spaces with a notion of convergence and Weierstrass theorem for coercive and lower-semicontinuous functions. Separable Hilbert spaces: orthonormal systems and components."];
Lezioni[10] = [ "10", "12/10/2016", "15:00", "16:00", "Strong convergence: continuity of the norm and lack of compactness of balls in infinite dimension. Weak convergence: definition, compactness of balls, lower semicontinuity of the norm."];
Lezioni[11] = [ "11", "14/10/2016", "16:00", "17:00", "Passing to the limit in scalar products. Weakly convergent sequences are bounded. Weak convergence can be tested only on a set which spans a dense subspace."];
Lezioni[12] = [ "12", "14/10/2016", "17:00", "18:00", "Summary of basic facts concerning Lebesgue measure and Lebesgue spaces. Fundamental lemma for measurable functions. Examples of weakly convergent sequences of functions."];
Lezioni[13] = [ "13", "19/10/2016", "14:00", "15:00", "Sobolev spaces in dimension one: definition W vs definition H, basic properties and examples. Proof that H is contained in W."];
Lezioni[14] = [ "14", "19/10/2016", "15:00", "16:00", "Antiderivative of weak derivatives. Proof that W is contained in H. Holder continuity of Sobolev functions. Weak derivatives and difference quotients."];
Lezioni[15] = [ "15", "21/10/2016", "15:00", "16:00", "Road map of the direct method: weak formulation in Sobolev spaces, compactness of sub-levels with respect to a suitable notion of convergence, lower semicontinuity, regularity (initial step and bootstrap). First example of application."];
Lezioni[16] = [ "16", "21/10/2016", "16:00", "17:00", "General discussion of compactness theorems in functional spaces. Passing to the limit in integral functionals (uniform convergence and continuous Lagrangian, weak convergence and convex Lagrangian)."];
Lezioni[17] = [ "17", "26/10/2016", "14:00", "15:00", "Variational approach to a boundary value problem for a second order ordinary differential equation: existence, regularity, uniqueness under monotonicity assumptions. Discussion of different boundary conditions."];
Lezioni[18] = [ "18", "26/10/2016", "15:00", "16:00", "Example of non-uniqueness for a Dirichlet problem. Variational approach to the existence of periodic solutions. Growth assumptions on the Lagrangian vs compactness of sub-levels."];
Lezioni[19] = [ "19", "28/10/2016", "16:00", "17:00", "Definition of lower semicontinuous envelope and relaxation in metric spaces. Recovery sequences. The relaxation coincides with the lower semicontinuous envelope. Stability of the relaxation under continuous perturbations."];
Lezioni[20] = [ "20", "28/10/2016", "17:00", "18:00", "Inf/min of a function vs inf/min of the relaxation. Minimizing sequences for a function vs recovery sequences for minimum points of the relaxation. Subsets dense in energy and their role in the computation of the relaxation."];
Lezioni[21] = [ "21", "02/11/2016", "14:00", "15:00", "Strategies for computing a relaxation. Extension by relaxation and third characterization of Sobolev spaces. Example of relaxation of an integral functional."];
Lezioni[22] = [ "22", "02/11/2016", "15:00", "16:00", "Definition of Gamma-convergence in metric spaces. Recovery sequences. Lack of connections with point-wise and uniform convergence. Connection with relaxation. Simple examples on the real line. Stability under continuous perturbations. Gamma-liminf and Gamma-limsup."];
Lezioni[23] = [ "23", "04/11/2016", "14:00", "15:00", "Lower semicontinuity of Gamma-liminf and Gamma-limsup. Equicoerciveness. Convergence of minima and minimizers for equicoercive sequences."];
Lezioni[24] = [ "24", "04/11/2016", "15:00", "16:00", "Proof of the Lagrange multipliers method in finite dimension by penalization of the constraint. Interpretation in terms of Gamma convergence. First example of study of the asymptotic behavior of a parametric minimum problems."];
Lezioni[25] = [ "25", "09/11/2016", "14:00", "15:00", "Notions of minimum point: directional local minimum (DLM), weak local minimum (WLM), strong local minimum (SLM), global minimum (GM). Example of a WLM which is not a SLM. Second variation of a functional along a direction."];
Lezioni[26] = [ "26", "09/11/2016", "15:00", "16:00", "Quadratic functionals. Legendre conditions. Jacobi differential equation, conjugate points and Jacobi conditions. Necessary conditions for a quadratic functional to be nonnegative."];
Lezioni[27] = [ "27", "11/11/2016", "16:00", "17:00", "Sufficient conditions for a quadratic functional to be nonnegative. Oscillation lemma for second order linear ODEs."];
Lezioni[28] = [ "28", "11/11/2016", "17:00", "18:00", "Strictly positive quadratic functionals. Estimates from below and from above for a quadratic functional. Necessary conditions for an extremal to be a DLM. Sufficient conditions for an extremal to be a WLM."];
Lezioni[29] = [ "29", "16/11/2016", "14:00", "15:00", "Calibrations: introduction and motivating examples. Null Lagrangians and verification functions. Interpretation of minimality results for quadratic functionals and convex Lagrangians in terms of calibration through null Lagrangians. Level sets of verifications functions and calibration of curve-to-curve problems."];
Lezioni[30] = [ "30", "16/11/2016", "15:00", "16:00", "Value function. A smooth value function is a verification function. Weierstrass excess function and Weierstrass conditions for SLM. Weierstrass fields and slope function."];
Lezioni[31] = [ "31", "23/11/2016", "14:00", "15:00", "The existence of a Weierstrass field implies the Weierstrass representation formula: proof à la Hilbert (via null Lagrangian) and proof à la Weierstrass (in a special case)."];
Lezioni[32] = [ "32", "23/11/2016", "15:00", "16:00", "Weierstrass necessary condition for an extremal to be a SLM. Idea of the proof of the imbedding theorem (Jacobi condition implies the existence of a Weierstrass field)."];
Lezioni[33] = [ "33", "25/11/2016", "14:00", "15:00", "Lagrange multipliers in the calculus of variations: proof via implicit function theorem and via inverse function theorem. Example of application."];
Lezioni[34] = [ "34", "25/11/2016", "15:00", "16:00", "First variation of functionals with multiple integrals: Dirichlet integral and Laplacian, Euler equation in divergence form, normal derivative at the boundary and Neumann boundary conditions."];
Lezioni[35] = [ "35", "30/11/2016", "14:00", "15:00", "Definition of weak convergence in Lp. Weak lower semicontinuity under convexity assumptions. Weak compactness under super-linear growth assumptions. Weak convergence of bounded sequences can be tested on a dense subset."];
Lezioni[36] = [ "36", "30/11/2016", "15:00", "16:00", "Regularity issues: lack of coerciveness of the Lagrangian and Holder regularity of the derivative of the minimizer. Examples of application of the direct method for Lagrangians with non-quadratic growth."];
Lezioni[37] = [ "37", "02/12/2016", "14:00", "15:00", "Extension by relaxation of convex functionals to less regular ambient spaces. Density in energy of piecewise affine functions. Pathologies due to the lack of super-linear growth assumptions."];
Lezioni[38] = [ "38", "02/12/2016", "15:00", "16:00", "Convexification of a function and its role in the computation of the relaxation of functionals with non-convex Lagrangian and suitable growth assumptions. Example of application of the theory developed so far."];
Lezioni[39] = [ "39", "07/12/2016", "14:00", "15:00", "Classical examples: geodesics in the plane, on the cylinder and on the sphere (extremals, global/local minima, calibrations). Curves that minimize the Dirichlet integral are geodesics."];
Lezioni[40] = [ "40", "07/12/2016", "15:00", "16:00", "Classical examples: obstacle problems. Direct method, with constraints on the function and/or on the derivative. Euler equation in form of inequality. Contact condition and optimal regularity in a contact point."];
Lezioni[41] = [ "41", "09/12/2016", "16:00", "17:00", "Examples of Gamma-convergence: problems with small parameters (in the functional and/or in the boundary conditions) inducing linearization effects."];
Lezioni[42] = [ "42", "09/12/2016", "17:00", "18:00", "Examples of Gamma-convergence: discrete-to-continuum models, from difference quotients to derivatives. Euler equation in the discrete setting."];
Lezioni[43] = [ "43", "14/12/2016", "14:00", "15:00", "Classical problem: brachistocrone problem. Model, Euler equation, families of cycloids, existence/uniqueness of cycloid with given boundary conditions, global minimality (via Weierstrass field and via convexity trick)."];
Lezioni[44] = [ "44", "14/12/2016", "15:00", "16:00", "Classical problem: cartesian Dido's problem. Euler equation with Lagrange multipliers, existence of solution depending on the parameter, global minimality, discussion of the case where no classical solution exists. Sufficient condition for minimality in a constrained minimization problem."];
Lezioni[45] = [ "45", "16/12/2016", "16:00", "17:00", "Classical problem: minimal surface of revolution. Euler equation, existence/uniqueness depending on parameters, description of solutions in a special symmetric case, families of catenaries."];
Lezioni[46] = [ "46", "16/12/2016", "17:00", "18:00", "Classical problem: heavy chain. Cartesian and parametric formulation, Euler equation with Lagrange multipliers, existence/uniqueness depending on the parameters. General discussion of minimum problems with point-wise constraint on derivatives: relaxation and saturation of the constraint."];
Lezioni[47] = [ "47", "21/12/2016", "14:00", "15:00", "Examples of Gamma-convergence: homogenization problems with oscillating coefficients either on the function or on the derivative. Cell problem."];
Lezioni[48] = [ "48", "21/12/2016", "15:00", "16:00", "Examples of Gamma-convergence: Modica-Mortola functional in dimension one (asymptotic study of the minimum value and the optimal transition profile)."];
