var NomeCorso = "Istituzioni di Analisi Matematica - 2021/2022";
var ArchivioCorso = "IstAM/IstAM_22";
var PrefissoFile = "IstAM_22_L";
var Percorso = MEDIA.lezioni + "IstAM_22/IstAM_22_L";
var CifreNumeroLezione = 2;

var SchedaCorso = {
  nome: "Principles of Mathematical Analysis",
  annoAccademico: "2021/2022",
  crediti: "11",
  target: "Students of the Master Degree in Mathematics",
  anno: "First year of the Master Degree",
};

var DocumentiCorso = [
  {
    sezione: "burocrazia",
    file: "IstAM_22_Burocrazia.pdf",
    titolo: "General informations"
  },
  {
    sezione: "burocrazia",
    file: "IstAM_22_Esame.pdf",
    titolo: "Exam rules (in presence)"
  },
  {
    sezione: "burocrazia",
    file: "IstAM_22_EsamiTelematici.pdf",
    titolo: "Exam rules (online version)"
  },
  {
    sezione: "burocrazia",
    file: "IstAM_22_Programma.pdf",
    titolo: "Detailed Syllabus"
  },
  {
    sezione: "book",
    file: "IstAM_22_Book1.pdf",
    titolo: "Printout of lectures (Volume 1 -- Lectures 1/24)"
  },
  {
    sezione: "book",
    file: "IstAM_22_Book2.pdf",
    titolo: "Printout of lectures (Volume 2 -- Lectures 25/46)"
  },
  {
    sezione: "book",
    file: "IstAM_22_Book3.pdf",
    titolo: "Printout of lectures (Volume 3 -- Lectures 47/70)"
  }
];

var Lezioni = new Array();
Lezioni[1] = [ "1", "27/09/2021", "09:00", "10:00", "Introduction to the calculus of variations: minimum and minimum points. Indirect method in the calculus of variations: first variation of a function along a curve, Gateaux derivative, necessary conditions for minimality. Direct method in the calculus of variations: notion of convergence, compactness, lower semicontinuity, coercivity, Weierstrass theorem."];
Lezioni[2] = [ "2", "27/09/2021", "10:00", "11:00", "Integral functionals and Lagrangians. First examples of application of the indirect method: explicit study of three model examples of integral functionals with Lagrangian depending on a power of the derivative. Integral and differential forms of the first variation. Euler-Lagrange equation."];
Lezioni[3] = [ "3", "29/09/2021", "11:00", "12:00", "Fundamental Lemma in the Calculus of Variations (FLCV), FLCV with 0 average, Du Bois-Reymond Lemma (classical and Lebesgue setting): statements, possible strategies for the proofs, discussion of variants."];
Lezioni[4] = [ "4", "29/09/2021", "12:00", "13:00", "Genesis of boundary conditions for Euler-Lagrange equations. Examples leading to conditions of Dirichlet, Neumann, and periodic type. Example with an integral constraint."];
Lezioni[5] = [ "5", "30/09/2021", "09:00", "10:00", "Euler-Lagrange equation for a general Lagrangian: integral forms, differential forms (classical, à la Du Bois-Reymond, Beltrami identity for the autonomous case). Discussion of the regularity assumptions needed for each form. Extension to Lagrangians depending on higher order derivatives."];
Lezioni[6] = [ "6", "30/09/2021", "10:00", "11:00", "First variation of functionals with multiple integrals: Dirichlet integral and Laplacial, Euler-Lagrange equation in divergence form, normal derivative and Neumann boundary conditions."];
Lezioni[7] = [ "7", "04/10/2021", "09:00", "10:00", "Sufficient conditions for minimality: via convexity and via auxiliary osculating functional. Existence and nonexistence of minima in the case of a nonconvex Lagrangian (double-well potential)."];
Lezioni[8] = [ "8", "04/10/2021", "10:00", "11:00", "Inner (horizontal) variation of an integral functional. Truncation argument for functionals vs maximum principles for corresponding Euler-Lagrange equations."];
Lezioni[9] = [ "9", "06/10/2021", "11:00", "12:00", "Definition of Hilbert space. Strong continuity of the norm and the scalar product.  Definition of orthonormal basis (Hilbert basis). Every Hilbert space admits a Hilbert basis (finite or countable if the space is separable). Components of a vector with respect to a Hilbert basis. Representation of vectors, norm, and scalar product in terms of components. Useful lemmata"];
Lezioni[10] = [ "10", "06/10/2021", "12:00", "13:00", "Proof of the two main results concerning Hilbert bases. Weak convergence in Hilbert spaces: definition, first properties, first examples. For bounded sequences, weak convergence is equivalent to convergence of components with respect to a Hilbert basis."];
Lezioni[11] = [ "11", "07/10/2021", "09:00", "10:00", "Passing a scalar product to the limit with a weak and a strong convergence. Lower semicontinuity of the norm with respect to weak convergence in a Hilbert space. Weak compactness of balls is a separable Hilbert space. Normal convergence of series in Banach spaces."];
Lezioni[12] = [ "12", "07/10/2021", "10:00", "11:00", "L2 and l2 as Hilbert spaces. Road map to the completeness of L2 spaces. Elementary proof of the completeness of l2. Example of a sequence of functions that converges weakly but not strongly in L2."];
Lezioni[13] = [ "13", "11/10/2021", "09:00", "10:00", "Definition W of weak derivatives. First properties: uniqueness, linearity, compatibility with the classical case, examples of existence and non-existence. Stability when passing to the limit. A function coincides almost everywhere with the integral function of its W-weak derivative. Continuity of functions with a W-weak derivative."];
Lezioni[14] = [ "14", "11/10/2021", "10:00", "11:00", "Definition H of weak derivative. H implies W. Definition (W and H) of Sobolev spaces (of order 1 in an interval). Holder continuity of Sobolev functions with p>1. Pointwise values of Sobolev functions (up to the boundary). W implies H (for both weak derivatives and Sobolev spaces). Discussion of the case p=infinity. Integration by parts formula for Sobolev functions."];
Lezioni[15] = [ "15", "13/10/2021", "11:00", "12:00", "Road map of the direct method: weak formulation in Sobolev spaces, compacteness with respect to a suitable notion of convergence, lower semicontinuity with respect to the same notion of convergence, regularity (weak form of ELE, from H1 to C1 and C2, bootstrap). First examples of application."];
Lezioni[16] = [ "16", "13/10/2021", "12:00", "13:00", "Further examples of application of the direct method. Estimates from below on the Lagrangian and DBC vs integral estimates on derivatives. Uniform estimates on functions obtained from integral estimates (through the mean value theorem for integrals). Lower semicontinuity via Fatou's emma."];
Lezioni[17] = [ "17", "14/10/2021", "09:00", "10:00", "Variational approach to a boundary value problem for an ordinary differential equation of order two: existence, regularity, uniqueness under monotonicity/convexity assumptions (two proofs: via uniqueness for the associated minimum problem, and via the equation itself), qualitative behavior of the solution."];
Lezioni[18] = [ "18", "14/10/2021", "10:00", "11:00", "How to adapt the variational approach to different boundary conditions of Dirichlet/Neumann type."];
Lezioni[19] = [ "19", "18/10/2021", "09:00", "10:00", "Definition of weak convergence in Lp. If the measure of the space is finite, then the weak convergence in L1 is the weakest. For bounded sequences it is enough to test weak convergence on a set of test functions whose span is dense. Boundedness in Lp and weak convergence in L1 imply weak convergence in Lp. Monotone approximation lemma for convex functions. Lower semicontinuity of integral funzionals with respect to weak convergence under convexity assumption."];
Lezioni[20] = [ "20", "18/10/2021", "10:00", "11:00", "Weak compactness of balls in Lp for p>1. Counterexample for p=1. General weak compactness statement in L1 with boundedness of an integral with superlinear growth. Proof of weak compactness of balls under additional assumptions. Example of a minimum problem for a functional with non-quadratic growth in the derivative. Optimal Holder regularity of the derivative of minimizers."];
Lezioni[21] = [ "21", "20/10/2021", "11:00", "12:00", "Parallelogram identity. Characterization of the norms generated by a scalar product (Jordan-Fréchet-von Neumann). Projection onto a closed convex set: existence, uniqueness, characterization, 1-Lipschitz continuity."];
Lezioni[22] = [ "22", "20/10/2021", "12:00", "13:00", "Projection onto closed subspaces: linearity and characterization. Orthogonal complement of a subspace. Direct orthogonal sums. Strong separation (through hyperplanes) of a point and a closed convex set. Strongly closed + convex implies weakly closed. Strongly lower semicontinuous + convex implies weakly lower semicontinuous."];
Lezioni[23] = [ "23", "21/10/2021", "09:00", "10:00", "Lagrange multipliers method: statement in terms of first variation, and proof via inverse function theorem. Poincaré inequality in an interval. Dependence of the Poincaré constant on the length of the interval."];
Lezioni[24] = [ "24", "21/10/2021", "10:00", "11:00", "Final examples concerning integral functionals: variational approach to the existence of periodic solutions for an ordinary differential equation, competition between growth assumptions, study of a critical case using Poincaré inequality."];
Lezioni[25] = [ "25", "25/10/2021", "09:00", "10:00", "Weak derivatives: definition W and H, basic properties, H implies W, statement that W implies H. Sobolev spaces in full generality (any dimension, any open set, any order of derivation): definition W and definition H (as the completion of a suitable metric space). Statement of the three approximation theorems: low cost version, Meyers-Serrin, deluxe version. Example of function without first order weak-derivatives, but with second order mixed weak-derivatives."];
Lezioni[26] = [ "26", "25/10/2021", "10:00", "11:00", "Algebraic theorems in Sobolev spaces: product, composition (Sobolev inside), absolute value, min and max, composition (Sobolev outside). Discussion of the approximation results needed in the proof. Discussion of the case p=infinity."];
Lezioni[27] = [ "27", "27/10/2021", "11:00", "12:00", "Summary of basic facts about mollifiers and regularization by convolution. Convolution commutes with W-weak derivatives. Proof of the low-cost approximation result for Sobolev functions. Proof that W-weak derivatives are also H-weak derivatives."];
Lezioni[28] = [ "28", "27/10/2021", "12:00", "13:00", "The product of a Sobolev function and a C-infinity function with compact support is a Sobolev function. Partitions of the unity of type A (locally finite covering of an open set by means of well-contained open sets). Proof of Meyers-Serrin theorem (H=W)."];
Lezioni[29] = [ "29", "28/10/2021", "09:00", "10:00", "Embedding theorems for Sobolev spaces: statement of the three cases (depending on p and d), both in the whole space and in a regular open set, both for derivatives of order one and for derivatives of any order. Pure (rhs depending on the gradient only) vs impure (rhs depending on the full norm) estimates. Definition of various classes of extenders, and their role in the proof of Sobolev embeddings and deluxe approximation results."];
Lezioni[30] = [ "30", "28/10/2021", "10:00", "11:00", "Gagliardo inequality (with a hint to Brascamp-Lieb inequalities): statement and proof. Homothety argument that identifies the exponents involved in the Sobolev embeddings. First example of an open set where extension and embedding results fail."];
Lezioni[31] = [ "31", "03/11/2021", "11:00", "12:00", "Proof of Sobolev embeddings for p less than or equal to the space dimension. Deluxe approximation for Sobolev functions on the whole space."];
Lezioni[32] = [ "32", "03/11/2021", "12:00", "13:00", "Proof of Sobolev embeddings into Holder continuous functions for p greater than the space dimension (Morrey). Sobolev functions with p greater than the space dimension vanish at infinity. Scaling technique for constructing multi-bump counterexamples."];
Lezioni[33] = [ "33", "04/11/2021", "09:00", "10:00", "General presentation of extension results. Extension by reflexion in cylinders, and computation of weak derivatives of the extension. Extension in rectangles by multiple reflections."];
Lezioni[34] = [ "34", "04/11/2021", "10:00", "11:00", "Open sets with compact boundary of class C-1. Sobolev spaces of diffeomorphic open sets are isomorphic. Partitions of the unity of type B (finite covering of an open set with compact boundary). Existence of 1-extenders for open sets with compact boundary of class C-1."];
Lezioni[35] = [ "35", "08/11/2021", "09:00", "10:00", "Informal introduction to compact embedding theorems. Summary of basic facts concerning compactness, relative compactness, and total boundedness in metric spaces. Compactness criterion in Lp spaces (Lp variant of Ascoli-Arzelà theorem)."];
Lezioni[36] = [ "36", "08/11/2021", "10:00", "11:00", "Compact embedding theorem in Sobolev spaces (Rellich-Kondrachov): statement and proof. Interpolation inequality in Lp spaces and consequences. Counterexample to compact embedding in the critical case."];
Lezioni[37] = [ "37", "10/11/2021", "11:00", "12:00", "General presentation of traces. Traces of Sobolev functions in the model case (half-space): fundamental inequality in the smooth case, further Lp regularity, definition through approximation. Basic properties of the trace: linearity, it coincides with the restriction for continuous functions, integration by parts formula."];
Lezioni[38] = [ "38", "10/11/2021", "12:00", "13:00", "Holder continuity of the trace. Continuous dependence of the trace under a boundedness assumption on the gradients. Counterexample for p=1. Road map for the definition of the trace in regular open sets."];
Lezioni[39] = [ "39", "11/11/2021", "11:00", "12:00", "Sobolev functions that can be approximated with functions of class C-infinity with compact support: definition, embedding theorems, characterization (in open sets with smooth boundary) as functions with null trace or functions whose extension by 0 is Sobolev."];
Lezioni[40] = [ "40", "11/11/2021", "12:00", "13:00", "Approximation of Sobolev functions defined in the complement of a single point by functions of class C-infinity with compact support. Connection with the computation of the capacity of a point in a ball. Discussion of the capacity in terms of the space dimension and the summability exponent p."];
Lezioni[41] = [ "41", "15/11/2021", "09:00", "10:00", "Poincaré-Sobolev inequalities (estimate of the q-norm of a function that is 0 at the boundary in terms of the p-norm of the gradient. Poincaré-Sobolev-Wirtinger inequalities (estimate of the q-norm of the difference between a function and its average in terms of the q-norm of the gradient). Discussion of two possible strategies for a proof."];
Lezioni[42] = [ "42", "15/11/2021", "10:00", "11:00", "Example of variational approach to two elliptic equations: weak formulation, compactness, lower semicontinuity, existence of a weak solution via direct method, ELE in first integral form."];
Lezioni[43] = [ "43", "17/11/2021", "11:00", "12:00", "Introduction to regularity for elliptic equations. Terminology: ellipticity condition on a matrix, linear/semilinear/quasilinear equations. Summary of (internal and up-to-the-boundary) regularity results for linear elliptic equations: L2/Lp/Schauder theory. Applications to semilinear equations."];
Lezioni[44] = [ "44", "17/11/2021", "12:00", "13:00", "Statement of the internal L2 regularity results. A priori estimates for internal regularity, both in the whole space, and in a general open set. Rigorous proof of the localization result (Laplacian of the product of a smooth and a Sobolev function)."];
Lezioni[45] = [ "45", "18/11/2021", "09:00", "10:00", "Discrete derivatives: definition and main properties. Characterization of Sobolev spaces in terms of discrete derivatives. From a priori estimates to elliptic regularity via discrete derivatives."];
Lezioni[46] = [ "46", "18/11/2021", "10:00", "11:00", "Regularity up to the boundary for elliptic equations with Dirichlet boundary conditions: a priori estimates in a half-space, formalization through discrete derivatives, general case in regular open sets."];
Lezioni[47] = [ "47", "22/11/2021", "09:00", "10:00", "Compact operators and symmetric operators. Strong-strong continuity for linear compact operators. Weak-strong continuity for compact symmetric linear operators. Rayleigh quotient. Variational characterization of eigenvalues/eigenvectors."];
Lezioni[48] = [ "48", "22/11/2021", "10:00", "11:00", "Spectral theorem for compact symmetric linear operators. Example of a linear symmetric operator without eigenvalues."];
Lezioni[49] = [ "49", "24/11/2021", "11:00", "12:00", "Uniform-on-bounded-sets limit of compact operators is compact. Approximation of compact operators in Hilbert spaces. Non-linear projection in normed spaces."];
Lezioni[50] = [ "50", "24/11/2021", "12:00", "13:00", "From Brouwer fixed point theorem to Schauder fixed point theorem. Counterexample to Brouwer fixed point theorem in infinite dimension. Proof of Schauder theorem. Proof of existence of solutions for differential equations via Schauder fixed point theorem."];
Lezioni[51] = [ "51", "25/11/2021", "09:00", "10:00", "Characterizations of continuity for linear applications between normed spaces. Pseudo-norms and Hahn-Banach theorem (analytic form). Discussion of the existence of continuous and non-continuous applications between normed spaces."];
Lezioni[52] = [ "52", "25/11/2021", "10:00", "11:00", "Aligned functional. Space of linear operators between normed spaces. Norm of an operator. Topological dual of a normed space. Dual characterization of the norm. Example of proof by duality."];
Lezioni[53] = [ "53", "29/11/2021", "09:00", "10:00", "Definition of weak convergence (in a normed space) and weak* convergence (in its topological dual). Lower semicontinuity of the norm. Weak* compactness of balls in duals of separable normed spaces. Weak/strong separation through hyperplanes: definitions, statements, consequences (strong + convex implies weak)."];
Lezioni[54] = [ "54", "29/11/2021", "10:00", "11:00", "Pseudo-norm (gauge) associated to a convex set. Proof of the results concerning weak/strong separation through hyperplanes (geometric forms of Hahn-Banach theorem). Example of two closed convex sets in finite dimension that do not admit a strong separation."];
Lezioni[55] = [ "55", "01/12/2021", "11:00", "12:00", "Description of common sequence spaces: lp, converging sequences, sequences whose limit is zero, sequences that are eventually zero. Duality pairing between sequences. Characterization of the dual of l1 and lp."];
Lezioni[56] = [ "56", "01/12/2021", "12:00", "13:00", "Dual of sequences whose limit is zero, of sequences that are eventually zero, and of converging sequences. In the case of l-infinity the duality pairing with l1 is a non-surjective isometry. Elements of the dual of l-infinity that coincide with the limit for converging sequences."];
Lezioni[57] = [ "57", "03/12/2021", "09:00", "10:00", "Duality pairing between functions. Dual of Lp spaces on finite measure spaces via Radon-Nikodym theorem: well-posedness, linearity, continuity, isometry, costruction of the measure."];
Lezioni[58] = [ "58", "03/12/2021", "10:00", "11:00", "Conclusion of the proof of the characterization of duals of Lp spaces. Dual of Hilbert spaces: proof via orthonormal basis and via projection onto a closed convex set."];
Lezioni[59] = [ "59", "06/12/2021", "09:00", "10:00", "Bidual, canonical injection, and definition of reflexive space. Weak compactness of balls in reflexive spaces whose topological dual is separable. Realization of the sup in the definition of norm in the dual. Relation between the separability of a space and the separability of its dual. Paradox of Hilbert triples."];
Lezioni[60] = [ "60", "06/12/2021", "10:00", "11:00", "Representation theorems for duals vs weak compactness of balls in Lp. Lax-Milgram approach to existence of weak solutions for linear elliptic equations. Extenders of pointwise values as elements of the dual of L-infinity. Examples of non-uniqueness of the aligned functional."];
Lezioni[61] = [ "61", "09/12/2021", "09:00", "10:00", "Baire spaces: equivalent definitions and basic terminology. Complete metric spaces and locally compact topological spaces are Baire spaces. Open subsets of Baire spaces are Baire spaces. First example of application of Baire category."];
Lezioni[62] = [ "62", "09/12/2021", "10:00", "11:00", "F-sigma e G-delta sets. The set of discontinuity points of a function between metric spaces is an F-sigma set. Irrational real numbers are not an F-sigma set.  A function of two real variables that is separately continuous, and vanishes on a dense subset, is identically zero. Sequences that converge weakly in Hilbert and normed spaces are bounded."];
Lezioni[63] = [ "63", "13/12/2021", "09:00", "10:00", "There do not exist Banach spaces with countable algebraic basis. Finite dimensional subspaces of a normed space are closed. Existence of continuous functions that are nowhere differentiable. Banach-Steinhaus theorem (as an equivalence and as an alternative). The pointwise limit of linear continuous operators is linear and continuous."];
Lezioni[64] = [ "64", "13/12/2021", "10:00", "11:00", "Proof of both versions of Banach-Steinhaus theorem. Existence of a dense G-delta set of continuous and periodic functions whose Fourier series does not converge in a dense G-delta set of points."];
Lezioni[65] = [ "65", "15/12/2021", "11:00", "12:00", "Characterization of surjective mappings in terms of qualitative solvers. Existence of linear qualitative solvers for surjective linear maps. Characterization of open mappings in terms of quantitative solvers. Statement of the open mapping theorem. Corollaries: continuity of the inverse, equivalence of Banach norms, closed graph theorem."];
Lezioni[66] = [ "66", "15/12/2021", "12:00", "13:00", "Proof of the open mapping theorem. In a normed space every vector is the sum of an absolutely converging series with values in a dense subset. Quantitative solvability on the whole space vs quantitative solvability on a dense subset. Existence of a linear quantitative solver vs existence of a topological complement. Special case in Hilbert spaces."];
Lezioni[67] = [ "67", "18/12/2021", "10:00", "11:00", "The pointwise limit of continuous functions is continuous in a dense G-delta set. The derivative of a differentiable function is continuous in a dense G-delta set. Unbounded operators. Multiplication operators in Hilbert spaces. The inverse of a symmetric compact operator as an unbounded multiplication operator. Powers of multiplication operators."];
Lezioni[68] = [ "68", "18/12/2021", "11:00", "12:00", "Classical example of unbounded operator: second derivative (or Laplacian) with homogeneous Dirichlet boundary conditions. Compactness and symmetry of the inverse in any dimension. Computation of eigenvalues and eigenvectors in the one dimensional case."];
Lezioni[69] = [ "69", "20/12/2021", "09:00", "10:00", "Computation of the domain of the power 1/2 of the second derivative with Dirichlet boundary conditions in an interval. Continuity of functions in the fractional Sobolev space Hs (in an interval) with s greater than 1/2. Existence of unbounded functions in the fractional Sobolev space Hs with s less than 1/2."];
Lezioni[70] = [ "70", "20/12/2021", "10:00", "11:00", "Regularity of eigenfunctions of the Laplacian, and orthogonality of their gradients, in any space dimension. In a square, traces of H1 functions coincide with functions of class H 1/2 of the section. List of important arguments that have not been addressed in the course."];
