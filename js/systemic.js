// Additional underscore.js utilities
_.clone = function(obj) {
    if (obj === undefined)
        return obj;
    return JSON.parse(JSON.stringify(obj));
};

_.parameter = function(name) {
  return(decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null);
};

K = function() {
	  // BEGIN_AUTO
	// Constants
	var SYSTEMIC_VERSION = 2.1200;
	var MAX_LINE = 8192;
	var T_RV = 0;
	var T_PHOTO = 1;
	var T_TIMING = 2;
	var T_DUMMY = 99;
	var DATA_SIZE = 11;
	var DATA_SETS_SIZE = 10;
	var T_TIME = 0;
	var T_VAL = 1;
	var T_ERR = 2;
	var T_TDS_PLANET = 3;
	var T_TDS_FLAG = 4;
	var T_FLAG = 6;
	var T_SVAL = 7;
	var T_PRED = 8;
	var T_SET = 9;
	var T_GUI = 10;
	var T_SCRATCH = 10;
	var X = 1;
	var Y = 2;
	var Z = 3;
	var VX = 4;
	var VY = 5;
	var VZ = 6;
	var STAT_MEAN = 0;
	var STAT_MEDIAN = -1;
	var STAT_STDDEV = -2;
	var STAT_MAD = -3;
	var STAT_QUART_25 = 25;
	var STAT_QUART_50 = 50;
	var STAT_QUART_75 = 75;
	var KEPLER = 0;
	var RK45 = 1;
	var RK89 = 2;
	var ADAMS = 3;
	var BULIRSCHSTOER = 4;
	var SWIFTRMVS = 5;
	var AU = 1.4959787e13;
	var MSUN = 1.98892e33;
	var MJUP = 1.8986e30;
	var RJUP = 7.1e9;
	var GGRAV = 6.67384e-8;
	var DAY = 8.64e4;
	var TWOPI = 6.2831853072e+00;
	var SQRT_TWOPI = 2.5066282746e+00;
	var YEAR = 31556926.;
	var PER = 0;
	var MASS = 1;
	var MA = 2;
	var ECC = 3;
	var LOP = 4;
	var INC = 5;
	var NODE = 6;
	var RADIUS = 7;
	var ORD = 8;
	var SMA = 13;
	var SEMIAMP = 14;
	var TPERI = 15;
	var TRUEANOMALY = 16;
	var MEANLONGITUDE = 17;
	var ELEMENTS_SIZE = 13;
	var ALL_ELEMENTS_SIZE = 20;
	var P_DATA1 = 0;
	var P_DATA2 = 1;
	var P_DATA3 = 2;
	var P_DATA4 = 3;
	var P_DATA5 = 4;
	var P_DATA6 = 5;
	var P_DATA7 = 6;
	var P_DATA8 = 7;
	var P_DATA9 = 8;
	var P_DATA10 = 9;
	var P_DATA_NOISE1 = 10;
	var P_DATA_NOISE2 = 11;
	var P_DATA_NOISE3 = 12;
	var P_DATA_NOISE4 = 13;
	var P_DATA_NOISE5 = 14;
	var P_DATA_NOISE6 = 15;
	var P_DATA_NOISE7 = 16;
	var P_DATA_NOISE8 = 17;
	var P_DATA_NOISE9 = 18;
	var P_DATA_NOISE10 = 19;
	var P_RV_TREND = 20;
	var PARAMS_SIZE = 100;
	var OPT_EPS = 0;
	var OPT_ECC_LAST = 1;
	var OPT_MCMC_SKIP_STEPS = 0;
	var OPT_MCMC_SKIP = 1;
	var OPT_MCMC_RSTOP_SINGLE = 2;
	var OPT_MCMC_RETURN_ALL = 3;
	var OPT_MCMC_BETA = 4;
	var OPT_MCMC_NSTOP = 5;
	var OPT_MCMC_TEMPFAC = 6;
	var OPT_MCMC_VERBOSE_DIAGS = 7;
	var OPT_MCMC_ACCRATIO = 8;
	var OPT_MCMC_NMIN = 9;
	var OPT_LM_MINCHI_PAR = 10;
	var OPT_LM_HIGH_DF = 11;
	var OPT_LM_MAX_ITER_AT_SCALE = 12;
	var OPT_LM_INITIAL_SCALE = 13;
	var OPT_SA_T0 = 20;
	var OPT_SA_ALPHA = 21;
	var OPT_SA_CHAINS = 22;
	var OPT_SA_AUTO_STEPS = 23;
	var OPT_DE_CR = 30;
	var OPT_DE_NP_FAC = 31;
	var OPT_DE_F_MIN = 32;
	var OPT_DE_F_MAX = 33;
	var OPT_DE_USE_STEPS = 34;
	var PROGRESS_CONTINUE = 0;
	var PROGRESS_STOP = 1;
	var TDS_PRIMARY = 1;
	var TDS_SECONDARY = 2;
	var DONE = -1;
	var ASTROCENTRIC = 0;
	var SIMPLEX = 0;
	var LM = 1;
	var DIFFEVOL = 2;
	var SA = 3;
	var INTEGRATION_SUCCESS = 0;
	var INTEGRATORS_SIZE = 4;
	var ELEMENT = 0;
	var PARAM = 1;
	var DATA = 2;
	var ALL = -1;
	var LENGTH = -2;
	var M_PI = 3.14159265e+00;
	var PS_TIME = 0;
	var PS_Z = 1;
	var PS_FAP = 2;
	var PS_Z_LS = 3;
	var PS_TAU = 4;
	var PS_WIN = 5;
	var PS_SIZE = 6;
	var PS_TYPE_DATA = 0;
	var PS_TYPE_RESIDUALS = 1;
	var ACTIVE = 2;
	var MINIMIZE = 4;
	var NEEDS_COMPILE = 2;
	var NEEDS_SETUP = 4;
	var BOOTSTRAP_DATA = 8;
	var RETAIN = 16;
	var SHARE_FLAGS = 32;
	var SHARE_STEPS = 64;
	var SHARE_DATA = 128;
	var SHARE_RANGES = 2048;
	var FREED = 256;
	var DUPLICATE = 512;
	var GUI_RESERVED_1 = 4096;
	var GUI_RESERVED_2 = 8192;
	var GUI_RESERVED_3 = 16384;
	var GUI_RESERVED_4 = 32768;
	var JACOBI = 1024;
	var INTEGRATION_FAILURE_SMALL_TIMESTEP = 2048;
	var INTEGRATION_FAILURE_INCREASE_TOLERANCE = 4096;
	var INTEGRATION_FAILURE_CLOSE_ENCOUNTER = 8192;
	var INTEGRATION_FAILURE_CLOSE_ENCOUNTER_STAR = 16384;
	var INTEGRATION_FAILURE_STOPPED = 32768;
	var INTEGRATION_FAILURE_SWIFT = 65536;
	// Function bindings
	var K_getDataAt = Module.cwrap('K_getDataAt', 'number', ['number', 'number', 'number', 'number']);	// double K_getDataAt(ok_kernel* k, int subset, int row, int column)
	var K_setDataAt = Module.cwrap('K_setDataAt', 'number', ['number', 'number', 'number', 'number', 'number']);	// void K_setDataAt(ok_kernel* k, int subset, int row, int column, double val)
	var K_getRVLine = Module.cwrap('K_getRVLine', 'number', ['number', 'number', 'number']);	// double K_getRVLine(ok_kernel* k, int row, int col)
	var K_getPeriodogramAt = Module.cwrap('K_getPeriodogramAt', 'number', ['number', 'number', 'number']);	// double K_getPeriodogramAt(ok_kernel* k, int row, int col)
	var K_minimizeWithTimeout = Module.cwrap('K_minimizeWithTimeout', 'number', ['number', 'number']);	// int K_minimizeWithTimeout(ok_kernel* k, int timeout)
	var K_getPhasedRVLine = Module.cwrap('K_getPhasedRVLine', 'number', ['number', 'number', 'number', 'number']);	// double K_getPhasedRVLine(ok_kernel* k, int planet, int row, int column)
	var K_getPhasedDataForPlanet = Module.cwrap('K_getPhasedDataForPlanet', 'number', ['number', 'number', 'number', 'number']);	// double K_getPhasedDataForPlanet(ok_kernel* k, int planet, int row, int column)
	var DEGRANGE = Module.cwrap('DEGRANGE', 'number', ['number']);	// double DEGRANGE(double angle)
	var RADRANGE = Module.cwrap('RADRANGE', 'number', ['number']);	// double RADRANGE(double angle)
	var ok_sort_small_matrix = Module.cwrap('ok_sort_small_matrix', 'number', ['number', 'number']);	// void ok_sort_small_matrix(gsl_matrix* matrix, const int column)
	var ok_sort_matrix = Module.cwrap('ok_sort_matrix', 'number', ['number', 'number']);	// void ok_sort_matrix(gsl_matrix* matrix, const int column)
	var ok_rsort_matrix = Module.cwrap('ok_rsort_matrix', 'number', ['number', 'number']);	// void ok_rsort_matrix(gsl_matrix* matrix, const int column)
	var ok_fprintf_matrix = Module.cwrap('ok_fprintf_matrix', 'number', ['number', 'number', 'string']);	// void ok_fprintf_matrix(gsl_matrix* matrix, FILE* file, const char* format)
	var ok_fprintf_vector = Module.cwrap('ok_fprintf_vector', 'number', ['number', 'number', 'string']);	// void ok_fprintf_vector(gsl_vector* v, FILE* file, const char* format)
	var ok_fprintf_matrix_int = Module.cwrap('ok_fprintf_matrix_int', 'number', ['number', 'number', 'string']);	// void ok_fprintf_matrix_int(gsl_matrix_int* matrix, FILE* file, const char* format)
	var ok_fprintf_vector_int = Module.cwrap('ok_fprintf_vector_int', 'number', ['number', 'number', 'string']);	// void ok_fprintf_vector_int(gsl_vector_int* v, FILE* file, const char* format)
	var ok_fprintf_buf = Module.cwrap('ok_fprintf_buf', 'number', ['number', 'number', 'string', 'number', 'number']);	// void ok_fprintf_buf(double** buf, FILE* file, const char* format, int rows, int columns)
	var ok_fscanf_matrix = Module.cwrap('ok_fscanf_matrix', 'number', ['number', 'number']);	// void ok_fscanf_matrix(gsl_matrix* matrix, FILE* file)
	var ok_fscanf_matrix_int = Module.cwrap('ok_fscanf_matrix_int', 'number', ['number', 'number']);	// void ok_fscanf_matrix_int(gsl_matrix_int* matrix, FILE* file)
	var ok_fscanf_vector = Module.cwrap('ok_fscanf_vector', 'number', ['number', 'number']);	// void ok_fscanf_vector(gsl_vector* matrix, FILE* file)
	var ok_fscanf_vector_int = Module.cwrap('ok_fscanf_vector_int', 'number', ['number', 'number']);	// void ok_fscanf_vector_int(gsl_vector_int* matrix, FILE* file)
	var ok_save_matrix = Module.cwrap('ok_save_matrix', 'number', ['number', 'number', 'string']);	// bool ok_save_matrix(gsl_matrix* matrix, FILE* fid, const char* format)
	var ok_save_matrix_bin = Module.cwrap('ok_save_matrix_bin', 'number', ['number', 'number']);	// bool ok_save_matrix_bin(gsl_matrix* matrix, FILE* fid)
	var ok_save_buf = Module.cwrap('ok_save_buf', 'number', ['number', 'number', 'string', 'number', 'number']);	// bool ok_save_buf(double** matrix, FILE* fid, const char* format, int rows, int cols)
	var ok_save_buf_bin = Module.cwrap('ok_save_buf_bin', 'number', ['number', 'number', 'number', 'number']);	// bool ok_save_buf_bin(double** matrix, FILE* fid, int rows, int cols)
	var ok_read_table = Module.cwrap('ok_read_table', 'number', ['number']);	// gsl_matrix* ok_read_table(FILE* fid)
	var ok_vector_resize = Module.cwrap('ok_vector_resize', 'number', ['number', 'number']);	// gsl_vector* ok_vector_resize(gsl_vector* v, int len)
	var ok_matrix_resize = Module.cwrap('ok_matrix_resize', 'number', ['number', 'number', 'number']);	// gsl_matrix* ok_matrix_resize(gsl_matrix* v, int rows, int cols)
	var ok_vector_resize_pad = Module.cwrap('ok_vector_resize_pad', 'number', ['number', 'number', 'number']);	// gsl_vector* ok_vector_resize_pad(gsl_vector* v, int len, double pad)
	var ok_matrix_resize_pad = Module.cwrap('ok_matrix_resize_pad', 'number', ['number', 'number', 'number', 'number']);	// gsl_matrix* ok_matrix_resize_pad(gsl_matrix* v, int rows, int cols, double pad)
	var ok_vector_int_resize = Module.cwrap('ok_vector_int_resize', 'number', ['number', 'number']);	// gsl_vector_int* ok_vector_int_resize(gsl_vector_int* v, int len)
	var ok_matrix_int_resize = Module.cwrap('ok_matrix_int_resize', 'number', ['number', 'number', 'number']);	// gsl_matrix_int* ok_matrix_int_resize(gsl_matrix_int* v, int rows, int cols)
	var ok_matrix_copy = Module.cwrap('ok_matrix_copy', 'number', ['number']);	// gsl_matrix* ok_matrix_copy(const gsl_matrix* src)
	var ok_matrix_copy_sub = Module.cwrap('ok_matrix_copy_sub', 'number', ['number', 'number', 'number', 'number', 'number']);	// gsl_matrix* ok_matrix_copy_sub(const gsl_matrix* src, int row1, int nrows, int col1, int ncols)
	var ok_matrix_int_copy = Module.cwrap('ok_matrix_int_copy', 'number', ['number']);	// gsl_matrix_int* ok_matrix_int_copy(const gsl_matrix_int* src)
	var ok_vector_copy = Module.cwrap('ok_vector_copy', 'number', ['number']);	// gsl_vector* ok_vector_copy(const gsl_vector* src)
	var ok_vector_int_copy = Module.cwrap('ok_vector_int_copy', 'number', ['number']);	// gsl_vector_int* ok_vector_int_copy(const gsl_vector_int* src)
	var ok_buf_to_matrix = Module.cwrap('ok_buf_to_matrix', 'number', ['number', 'number', 'number']);	// gsl_matrix* ok_buf_to_matrix(double** buf, int rows, int cols)
	var ok_buf_col = Module.cwrap('ok_buf_col', 'number', ['number', 'number', 'number', 'number']);	// void ok_buf_col(double** buf, double* vector, int col, int nrows)
	var ok_matrix_remove_row = Module.cwrap('ok_matrix_remove_row', 'number', ['number', 'number']);	// gsl_matrix* ok_matrix_remove_row(gsl_matrix* m, int row)
	var ok_matrix_remove_column = Module.cwrap('ok_matrix_remove_column', 'number', ['number', 'number']);	// gsl_matrix* ok_matrix_remove_column(gsl_matrix* m, int col)
	var ok_matrix_int_remove_row = Module.cwrap('ok_matrix_int_remove_row', 'number', ['number', 'number']);	// gsl_matrix_int* ok_matrix_int_remove_row(gsl_matrix_int* m, int row)
	var ok_matrix_int_remove_column = Module.cwrap('ok_matrix_int_remove_column', 'number', ['number', 'number']);	// gsl_matrix_int* ok_matrix_int_remove_column(gsl_matrix_int* m, int col)
	var ok_vector_remove = Module.cwrap('ok_vector_remove', 'number', ['number', 'number']);	// gsl_vector* ok_vector_remove(gsl_vector* m, int idx)
	var ok_vector_int_remove = Module.cwrap('ok_vector_int_remove', 'number', ['number', 'number']);	// gsl_vector_int* ok_vector_int_remove(gsl_vector_int* m, int idx)
	var ok_matrix_fill = Module.cwrap('ok_matrix_fill', 'number', ['number', 'number']);	// void ok_matrix_fill(gsl_matrix* src, gsl_matrix* dest)
	var ok_bootstrap_matrix = Module.cwrap('ok_bootstrap_matrix', 'number', ['number', 'number', 'number', 'number']);	// void ok_bootstrap_matrix(const gsl_matrix* matrix, gsl_matrix* out, const int sortcol, gsl_rng* r)
	var ok_bootstrap_matrix_mean = Module.cwrap('ok_bootstrap_matrix_mean', 'number', ['number', 'number', 'number', 'number', 'number']);	// void ok_bootstrap_matrix_mean(const gsl_matrix* matrix, int timecol, int valcol, gsl_matrix* out, gsl_rng* r)
	var ok_matrix_filter = Module.cwrap('ok_matrix_filter', 'number', ['number', 'number', 'number']);	// gsl_matrix* ok_matrix_filter(gsl_matrix* matrix, const int column, const double filter)
	var ok_matrix_buf_filter = Module.cwrap('ok_matrix_buf_filter', 'number', ['number', 'number', 'number', 'number', 'number']);	// gsl_matrix* ok_matrix_buf_filter(double** matrix, const int rows, const int columns, const int column, const double filter)
	var ok_bsearch = Module.cwrap('ok_bsearch', 'number', ['number', 'number', 'number']);	// int ok_bsearch(double* v, double val, int len)
	var ok_average_angle = Module.cwrap('ok_average_angle', 'number', ['number', 'number', 'number']);	// double ok_average_angle(const double* v, const int length, const bool isRadians)
	var ok_median_angle = Module.cwrap('ok_median_angle', 'number', ['number', 'number', 'number']);	// double ok_median_angle(const double* v, const int length, const bool isRadians)
	var ok_stddev_angle = Module.cwrap('ok_stddev_angle', 'number', ['number', 'number', 'number']);	// double ok_stddev_angle(const double* v, const int length, const bool isRadians)
	var ok_mad_angle = Module.cwrap('ok_mad_angle', 'number', ['number', 'number', 'number', 'number']);	// double ok_mad_angle(double* v, const int length, const double med, const bool isRadians)
	var ok_mad = Module.cwrap('ok_mad', 'number', ['number', 'number', 'number']);	// double ok_mad(double* v, const int length, const double med)
	var ok_str_copy = Module.cwrap('ok_str_copy', 'number', ['string']);	// char* ok_str_copy(const char* src)
	var ok_str_cat = Module.cwrap('ok_str_cat', 'number', ['string', 'string']);	// char* ok_str_cat(const char* a1, const char* a2)
	var ok_avevar = Module.cwrap('ok_avevar', 'number', ['number', 'number', 'number', 'number']);	// void ok_avevar(const double* v, int len, double* ave, double* var)
	var ok_ptr_to_matrix = Module.cwrap('ok_ptr_to_matrix', 'number', ['number', 'number', 'number']);	// gsl_matrix* ok_ptr_to_matrix(double* v, unsigned int rows, unsigned int cols)
	var ok_ptr_to_vector = Module.cwrap('ok_ptr_to_vector', 'number', ['number', 'number']);	// gsl_vector* ok_ptr_to_vector(double* v, unsigned int len)
	var ok_iptr_to_imatrix = Module.cwrap('ok_iptr_to_imatrix', 'number', ['number', 'number', 'number']);	// gsl_matrix_int* ok_iptr_to_imatrix(int* v, unsigned int rows, unsigned int cols)
	var ok_iptr_to_ivector = Module.cwrap('ok_iptr_to_ivector', 'number', ['number', 'number']);	// gsl_vector_int* ok_iptr_to_ivector(int* v, unsigned int len)
	var ok_block_to_ptr = Module.cwrap('ok_block_to_ptr', 'number', ['number', 'number']);	// void ok_block_to_ptr(void* vv, double* out)
	var ok_buf_to_ptr = Module.cwrap('ok_buf_to_ptr', 'number', ['number', 'number', 'number', 'number']);	// void ok_buf_to_ptr(double** v, unsigned int rows, unsigned int cols, double* out)
	var ok_buf_add_to_col = Module.cwrap('ok_buf_add_to_col', 'number', ['number', 'number', 'number', 'number']);	// void ok_buf_add_to_col(double** buf, double* col_vector, int col, int nrows)
	var ok_vector_len = Module.cwrap('ok_vector_len', 'number', ['number']);	// unsigned int ok_vector_len(void* v)
	var ok_matrix_rows = Module.cwrap('ok_matrix_rows', 'number', ['number']);	// unsigned int ok_matrix_rows(void* v)
	var ok_matrix_cols = Module.cwrap('ok_matrix_cols', 'number', ['number']);	// unsigned int ok_matrix_cols(void* v)
	var ok_vector_block = Module.cwrap('ok_vector_block', 'number', ['number']);	// gsl_block* ok_vector_block(void* v)
	var ok_matrix_block = Module.cwrap('ok_matrix_block', 'number', ['number']);	// gsl_block* ok_matrix_block(void* v)
	var ok_resample_curve = Module.cwrap('ok_resample_curve', 'number', ['number', 'number', 'number', 'number', 'number']);	// gsl_matrix* ok_resample_curve(gsl_matrix* curve, int timecol, int valcol, int every, double top)
	var ok_file_readable = Module.cwrap('ok_file_readable', 'number', ['number']);	// bool ok_file_readable(char* fn)
	var ok_periodogram_ls = Module.cwrap('ok_periodogram_ls', 'number', ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number']);	// gsl_matrix* ok_periodogram_ls(const gsl_matrix* data, const unsigned int samples, const double Pmin, const double Pmax, const int method,         unsigned int timecol, unsigned int valcol, unsigned int sigcol, ok_periodogram_workspace* p)
	var ok_periodogram_boot = Module.cwrap('ok_periodogram_boot', 'number', ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number']);	// gsl_matrix* ok_periodogram_boot(const gsl_matrix* data, const unsigned int trials, const unsigned int samples,         const double Pmin, const double Pmax, const int method,         const unsigned int timecol, const unsigned int valcol, const unsigned int sigcol,         const unsigned long int seed, ok_periodogram_workspace* p, ok_progress prog)
	var ok_periodogram_full = Module.cwrap('ok_periodogram_full', 'number', ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number']);	// gsl_matrix* ok_periodogram_full(ok_kernel* k, int type, int algo, bool circular, unsigned int sample,         const unsigned int samples, const double Pmin, const double Pmax)
	var K_alloc = Module.cwrap('K_alloc', 'number');	// ok_kernel* K_alloc()
	var K_free = Module.cwrap('K_free', 'number', ['number']);	// void K_free(ok_kernel* k)
	var K_clone = Module.cwrap('K_clone', 'number', ['number']);	// ok_kernel* K_clone(ok_kernel* k)
	var K_cloneFlags = Module.cwrap('K_cloneFlags', 'number', ['number', 'number']);	// ok_kernel* K_cloneFlags(ok_kernel* k, unsigned int shareFlags)
	var K_addDataFile = Module.cwrap('K_addDataFile', 'number', ['number', 'string', 'number']);	// gsl_matrix* K_addDataFile(ok_kernel* k, const char* path, int type)
	var K_addDataTable = Module.cwrap('K_addDataTable', 'number', ['number', 'number', 'string', 'number']);	// gsl_matrix* K_addDataTable(ok_kernel* k, gsl_matrix* rvtable, const char* name, int type)
	var K_removeData = Module.cwrap('K_removeData', 'number', ['number', 'number']);	// void K_removeData(ok_kernel* k, int idx)
	var K_getData = Module.cwrap('K_getData', 'number', ['number', 'number']);	// gsl_matrix* K_getData(ok_kernel* k, int idx)
	var K_setData = Module.cwrap('K_setData', 'number', ['number', 'number', 'number']);	// void K_setData(ok_kernel* k, int idx, gsl_matrix* data)
	var K_getDataName = Module.cwrap('K_getDataName', 'string', ['number', 'number']);	// const char* K_getDataName(ok_kernel* k, int idx)
	var K_addDataFromSystem = Module.cwrap('K_addDataFromSystem', 'number', ['number', 'string']);	// bool K_addDataFromSystem(ok_kernel* k, const char* filename)
	var K_getDataType = Module.cwrap('K_getDataType', 'number', ['number', 'number']);	// int K_getDataType(ok_kernel* k, int idx)
	var K_getDataSize = Module.cwrap('K_getDataSize', 'number', ['number', 'number']);	// int K_getDataSize(ok_kernel* k, int idx)
	var K_compileData = Module.cwrap('K_compileData', 'number', ['number']);	// double** K_compileData(ok_kernel* k)
	var K_getCompiledDataMatrix = Module.cwrap('K_getCompiledDataMatrix', 'number', ['number']);	// gsl_matrix* K_getCompiledDataMatrix(ok_kernel* k)
	var K_addPlanet = Module.cwrap('K_addPlanet', 'number', ['number', 'number']);	// void K_addPlanet(ok_kernel* k, const double elements[])
	var K_removePlanet = Module.cwrap('K_removePlanet', 'number', ['number', 'number']);	// void K_removePlanet(ok_kernel* k, int idx)
	var K_setElement = Module.cwrap('K_setElement', 'number', ['number', 'number', 'number', 'number']);	// void K_setElement(ok_kernel* k, int row, int col, double value)
	var K_getElement = Module.cwrap('K_getElement', 'number', ['number', 'number', 'number']);	// double K_getElement(ok_kernel* k, int row, int col)
	var K_setElements = Module.cwrap('K_setElements', 'number', ['number', 'number']);	// void K_setElements(ok_kernel* k, gsl_matrix* elements)
	var K_getElements = Module.cwrap('K_getElements', 'number', ['number']);	// gsl_matrix* K_getElements(ok_kernel* k)
	var K_setElementFlag = Module.cwrap('K_setElementFlag', 'number', ['number', 'number', 'number', 'number']);	// void K_setElementFlag(ok_kernel* k, int row, int col, int value)
	var K_getElementFlag = Module.cwrap('K_getElementFlag', 'number', ['number', 'number', 'number']);	// int K_getElementFlag(ok_kernel* k, int row, int col)
	var K_setElementStep = Module.cwrap('K_setElementStep', 'number', ['number', 'number', 'number', 'number']);	// void K_setElementStep(ok_kernel* k, int row, int col, double value)
	var K_getElementStep = Module.cwrap('K_getElementStep', 'number', ['number', 'number', 'number']);	// double K_getElementStep(ok_kernel* k, int row, int col)
	var K_setElementRange = Module.cwrap('K_setElementRange', 'number', ['number', 'number', 'number', 'number', 'number']);	// void K_setElementRange(ok_kernel* k, int row, int col, double min, double max)
	var K_getElementRange = Module.cwrap('K_getElementRange', 'number', ['number', 'number', 'number', 'number', 'number']);	// void K_getElementRange(ok_kernel* k, int row, int col, double* min, double* max)
	var K_getAllElements = Module.cwrap('K_getAllElements', 'number', ['number']);	// gsl_matrix* K_getAllElements(ok_kernel* k)
	var K_getActivePars = Module.cwrap('K_getActivePars', 'number', ['number']);	// int K_getActivePars(ok_kernel* k)
	var K_getActiveElements = Module.cwrap('K_getActiveElements', 'number', ['number']);	// int K_getActiveElements(ok_kernel* k)
	var K_getNrPars = Module.cwrap('K_getNrPars', 'number', ['number']);	// int K_getNrPars(ok_kernel* k)
	var K_setElementType = Module.cwrap('K_setElementType', 'number', ['number', 'number']);	// void K_setElementType(ok_kernel* k, int type)
	var K_getElementType = Module.cwrap('K_getElementType', 'number', ['number']);	// int K_getElementType(ok_kernel* k)
	var K_getXYZ = Module.cwrap('K_getXYZ', 'number', ['number']);	// gsl_matrix* K_getXYZ(ok_kernel* k)
	var K_setMstar = Module.cwrap('K_setMstar', 'number', ['number', 'number']);	// void K_setMstar(ok_kernel* k, double value)
	var K_getMstar = Module.cwrap('K_getMstar', 'number', ['number']);	// double K_getMstar(ok_kernel* k)
	var K_setEpoch = Module.cwrap('K_setEpoch', 'number', ['number', 'number']);	// void K_setEpoch(ok_kernel* k, double value)
	var K_getEpoch = Module.cwrap('K_getEpoch', 'number', ['number']);	// double K_getEpoch(ok_kernel* k)
	var K_getChi2 = Module.cwrap('K_getChi2', 'number', ['number']);	// double K_getChi2(ok_kernel* k)
	var K_getChi2_nr = Module.cwrap('K_getChi2_nr', 'number', ['number']);	// double K_getChi2_nr(ok_kernel* k)
	var K_getLoglik = Module.cwrap('K_getLoglik', 'number', ['number']);	// double K_getLoglik(ok_kernel* k)
	var K_getRms = Module.cwrap('K_getRms', 'number', ['number']);	// double K_getRms(ok_kernel* k)
	var K_getJitter = Module.cwrap('K_getJitter', 'number', ['number']);	// double K_getJitter(ok_kernel* k)
	var K_getCompiled = Module.cwrap('K_getCompiled', 'number', ['number']);	// double** K_getCompiled(ok_kernel* k)
	var K_getNrvs = Module.cwrap('K_getNrvs', 'number', ['number']);	// unsigned int K_getNrvs(ok_kernel* k)
	var K_getNtts = Module.cwrap('K_getNtts', 'number', ['number']);	// unsigned int K_getNtts(ok_kernel* k)
	var K_getNsets = Module.cwrap('K_getNsets', 'number', ['number']);	// unsigned int K_getNsets(ok_kernel* k)
	var K_getChi2_rvs = Module.cwrap('K_getChi2_rvs', 'number', ['number']);	// double K_getChi2_rvs(ok_kernel* k)
	var K_getChi2_tts = Module.cwrap('K_getChi2_tts', 'number', ['number']);	// double K_getChi2_tts(ok_kernel* k)
	var K_getRms_tts = Module.cwrap('K_getRms_tts', 'number', ['number']);	// double K_getRms_tts(ok_kernel* k)
	var K_setFlags = Module.cwrap('K_setFlags', 'number', ['number', 'number']);	// void K_setFlags(ok_kernel* k, unsigned int value)
	var K_getFlags = Module.cwrap('K_getFlags', 'number', ['number']);	// unsigned int K_getFlags(ok_kernel* k)
	var K_setMinFunc = Module.cwrap('K_setMinFunc', 'number', ['number', 'number']);	// void K_setMinFunc(ok_kernel* k, ok_callback value)
	var K_getMinFunc = Module.cwrap('K_getMinFunc', 'number', ['number']);	// ok_callback K_getMinFunc(ok_kernel* k)
	var K_setElementSteps = Module.cwrap('K_setElementSteps', 'number', ['number', 'number']);	// void K_setElementSteps(ok_kernel* k, gsl_matrix* value)
	var K_getElementSteps = Module.cwrap('K_getElementSteps', 'number', ['number']);	// gsl_matrix* K_getElementSteps(ok_kernel* k)
	var K_setParSteps = Module.cwrap('K_setParSteps', 'number', ['number', 'number']);	// void K_setParSteps(ok_kernel* k, gsl_vector* value)
	var K_getParSteps = Module.cwrap('K_getParSteps', 'number', ['number']);	// gsl_vector* K_getParSteps(ok_kernel* k)
	var K_setElementFlags = Module.cwrap('K_setElementFlags', 'number', ['number', 'number']);	// void K_setElementFlags(ok_kernel* k, gsl_matrix_int* value)
	var K_getElementFlags = Module.cwrap('K_getElementFlags', 'number', ['number']);	// gsl_matrix_int* K_getElementFlags(ok_kernel* k)
	var K_setParFlags = Module.cwrap('K_setParFlags', 'number', ['number', 'number']);	// void K_setParFlags(ok_kernel* k, gsl_vector_int* value)
	var K_getParFlags = Module.cwrap('K_getParFlags', 'number', ['number']);	// gsl_vector_int* K_getParFlags(ok_kernel* k)
	var K_setIntMethod = Module.cwrap('K_setIntMethod', 'number', ['number', 'number']);	// void K_setIntMethod(ok_kernel* k, int value)
	var K_getIntMethod = Module.cwrap('K_getIntMethod', 'number', ['number']);	// int K_getIntMethod(ok_kernel* k)
	var K_setProgress = Module.cwrap('K_setProgress', 'number', ['number', 'number']);	// void K_setProgress(ok_kernel* k, ok_progress value)
	var K_getProgress = Module.cwrap('K_getProgress', 'number', ['number']);	// ok_progress K_getProgress(ok_kernel* k)
	var K_setIntOptions = Module.cwrap('K_setIntOptions', 'number', ['number', 'number']);	// void K_setIntOptions(ok_kernel* k, ok_integrator_options* value)
	var K_getIntOptions = Module.cwrap('K_getIntOptions', 'number', ['number']);	// ok_integrator_options* K_getIntOptions(ok_kernel* k)
	var K_setCustomModelFunction = Module.cwrap('K_setCustomModelFunction', 'number', ['number', 'number']);	// void K_setCustomModelFunction(ok_kernel* k, ok_model_function value)
	var K_getCustomModelFunction = Module.cwrap('K_getCustomModelFunction', 'number', ['number']);	// ok_model_function K_getCustomModelFunction(ok_kernel* k)
	var K_setIntAbsAcc = Module.cwrap('K_setIntAbsAcc', 'number', ['number', 'number']);	// void K_setIntAbsAcc(ok_kernel* k, double value)
	var K_getIntAbsAcc = Module.cwrap('K_getIntAbsAcc', 'number', ['number']);	// double K_getIntAbsAcc(ok_kernel* k)
	var K_setIntRelAcc = Module.cwrap('K_setIntRelAcc', 'number', ['number', 'number']);	// void K_setIntRelAcc(ok_kernel* k, double value)
	var K_getIntRelAcc = Module.cwrap('K_getIntRelAcc', 'number', ['number']);	// double K_getIntRelAcc(ok_kernel* k)
	var K_setIntDt = Module.cwrap('K_setIntDt', 'number', ['number', 'number']);	// void K_setIntDt(ok_kernel* k, double value)
	var K_getIntDt = Module.cwrap('K_getIntDt', 'number', ['number']);	// double K_getIntDt(ok_kernel* k)
	var K_getNplanets = Module.cwrap('K_getNplanets', 'number', ['number']);	// unsigned int K_getNplanets(ok_kernel* k)
	var K_getNdata = Module.cwrap('K_getNdata', 'number', ['number']);	// unsigned int K_getNdata(ok_kernel* k)
	var K_getRange = Module.cwrap('K_getRange', 'number', ['number', 'number', 'number']);	// void K_getRange(ok_kernel* k, double* from, double* to)
	var K_perturb = Module.cwrap('K_perturb', 'number', ['number']);	// void K_perturb(ok_kernel* k)
	var K_setPars = Module.cwrap('K_setPars', 'number', ['number', 'number']);	// void K_setPars(ok_kernel* k, gsl_vector* pars)
	var K_getPars = Module.cwrap('K_getPars', 'number', ['number']);	// gsl_vector* K_getPars(ok_kernel* k)
	var K_setPar = Module.cwrap('K_setPar', 'number', ['number', 'number', 'number']);	// void K_setPar(ok_kernel* k, int idx, double val)
	var K_getPar = Module.cwrap('K_getPar', 'number', ['number', 'number']);	// double K_getPar(ok_kernel* k, int idx)
	var K_setParFlag = Module.cwrap('K_setParFlag', 'number', ['number', 'number', 'number']);	// void K_setParFlag(ok_kernel* k, int idx, int value)
	var K_getParFlag = Module.cwrap('K_getParFlag', 'number', ['number', 'number']);	// int K_getParFlag(ok_kernel* k, int idx)
	var K_setParStep = Module.cwrap('K_setParStep', 'number', ['number', 'number', 'number']);	// void K_setParStep(ok_kernel* k, int idx, double value)
	var K_getParStep = Module.cwrap('K_getParStep', 'number', ['number', 'number']);	// double K_getParStep(ok_kernel* k, int idx)
	var K_setParRange = Module.cwrap('K_setParRange', 'number', ['number', 'number', 'number', 'number']);	// void K_setParRange(ok_kernel* k, int idx, double min, double max)
	var K_getParRange = Module.cwrap('K_getParRange', 'number', ['number', 'number', 'number', 'number']);	// void K_getParRange(ok_kernel* k, int idx, double* min, double* max)
	var K_save = Module.cwrap('K_save', 'number', ['number', 'number']);	// bool K_save(ok_kernel* k, FILE* fid)
	var K_load = Module.cwrap('K_load', 'number', ['number', 'number']);	// ok_kernel* K_load(FILE* fid, int skip)
	var K_addDataFromSystem = Module.cwrap('K_addDataFromSystem', 'number', ['number', 'string']);	// bool K_addDataFromSystem(ok_kernel* k, const char* filename)
	var K_calculate = Module.cwrap('K_calculate', 'number', ['number']);	// void K_calculate(ok_kernel* k)
	var K_minimize = Module.cwrap('K_minimize', 'number', ['number', 'number', 'number', 'number']);	// int K_minimize(ok_kernel* k, int algo, int maxiter, double params[])
	var K_1dminimize = Module.cwrap('K_1dminimize', 'number', ['number', 'number', 'number', 'number', 'number', 'number']);	// int K_1dminimize(ok_kernel* k, int algo, int maxiter, int row, int column, double params[])
	var K_integrate = Module.cwrap('K_integrate', 'number', ['number', 'number', 'number', 'number']);	// ok_system** K_integrate(ok_kernel* k, gsl_vector* times, ok_system** bag, int* error)
	var K_integrateRange = Module.cwrap('K_integrateRange', 'number', ['number', 'number', 'number', 'number', 'number', 'number']);	// ok_system** K_integrateRange(ok_kernel* k, double from, double to, unsigned int samples, ok_system** bag, int* error)
	var K_integrateStellarVelocity = Module.cwrap('K_integrateStellarVelocity', 'number', ['number', 'number', 'number', 'number', 'number', 'number']);	// gsl_matrix* K_integrateStellarVelocity(ok_kernel* k, double from, double to, unsigned int samples, ok_system** bag, int* error)
	var K_integrateProgress = Module.cwrap('K_integrateProgress', 'number', ['number', 'number', 'number', 'number']);	// ok_system** K_integrateProgress(ok_kernel* k, gsl_vector* times, ok_system** bag, int* error)
	var K_print = Module.cwrap('K_print', 'number', ['number', 'number']);	// void K_print(ok_kernel* k, FILE* f)
	var K_save_old = Module.cwrap('K_save_old', 'number', ['number', 'string']);	// void K_save_old(ok_kernel* k, const char* stem)
	var K_setSeed = Module.cwrap('K_setSeed', 'number', ['number', 'number']);	// void K_setSeed(ok_kernel* k, unsigned long int seed)
	var ok_bridge_kernel_buf = Module.cwrap('ok_bridge_kernel_buf', 'number', ['number', 'number', 'number']);	// void* ok_bridge_kernel_buf(void* buf, int n, ok_kernel* k)

	// END_AUTO
	  
	  var k = K_alloc();
	  var SERIES = 6;
	  var RVLINE = 6;
	  var SAMPLES = 500;
	  var RVPLOT = "#rv";
	  var PSPLOT = "#rv";
	  PSDATA = null;
	  var NULL = null;
	  var INTMETHOD = KEPLER;
    var currentSystem = "14Her.sys";
	  var stopped = false;
    
	  MAX_PLANETS = 6;
	  MAX_ELEMENTS = 5;
	  MAX_SETS = 7;
	  EL_MIN_MAX = [[-1, 4], [-3, 1], [0, 360], [0, 0.99], [0, 360]];
	  COLORS = ["#007AFF", "#FF3B30", "#4CD964", "#5856D6", "#FF9500", "#34AADC"];
	  VOMAX = 500;
	  
	  
	  
	  // Initializes a new kernel object.
	  var init = function() {
		    K_removePlanet(k, -1);
		    K_removeData(k, -1);
        K_setEpoch(k, NaN);
		    K_setIntMethod(k, INTMETHOD);
        K_setIntRelAcc(k, 1e-11);
        K_setIntAbsAcc(k, 1e-11);
	  };
	  
	  var refreshPSPlot = function() {
//        return;
        if (K_getNdata(k) == 0)
            return;
        
		    var plotter = $("#psplot").highcharts();
		    var samples = K_getPeriodogramAt(k, -1, 0);

		    var data = [];
		    for (var i = 0; i < samples; i++)
			      data.push([Math.log(K_getPeriodogramAt(k, i, 0))/Math.LN10, K_getPeriodogramAt(k, i, 1),
			                 K_getPeriodogramAt(k, i, 2)]);

		    plotter.series[0].setData(data, true);

		    for (var i = 1; i <= 3; i++) {
			      var fap_z = K_getPeriodogramAt(k, -2, i);
			      plotter.series[i].setData([[data[0][0], fap_z], [data[data.length-1][0], fap_z]]);
		    }
		    
		    PSDATA = data;
	  };

    var eps = 1e-6;
    
    var getFAPforPeriod = function(P) {
        if (!PSDATA)
            return 0;
        for (var i = 0; i < PSDATA.length; i++) {
            if (Math.abs(PSDATA[i][0] - P) < eps) {
                return PSDATA[i][2];
            }
        }
        return 0;
    };

    var clearRVPlot = function(message) {
        
    };

    
    var PHASED_PLANET = 1;
    var RV_DEFAULT_XAXIS = "Julian Days [d]";
    var RV_PHASED_XAXIS = "Phase [d] - Phased to planet ";
    
    var setPhasedPlanet = function(n) {
        PHASED_PLANET = n;
        console.log(PHASED_PLANET);        
        refresh();
    };
    
	  var refreshRVPlot = function() {
        if (K_getNdata(k) == 0)
            return;

        var plotter = $("#rvplot").highcharts();
		    
		    var nsets = K_getNsets(k);

        if (RVPLOT != "#phased") {
            plotter.xAxis[0].update({title:{text: RV_DEFAULT_XAXIS}}, false);
		        for (var i = 0; i < SERIES; i++) {
			          if (i >= nsets) {
				            plotter.series[i].hide();
                    plotter.series[i].setData(null);
				            continue;
			          }
			          else
				            plotter.series[i].show();
			          
			          plotter.series[i].update({name:K_getDataName(k, i)}, false);
			          var data = [];
			          var size = K_getDataSize(k, i);
			          
			          for (var j = 0; j < size; j++) {
				            if (RVPLOT == "#rv")
					              data.push([K_getDataAt(k, i, j, T_TIME), K_getDataAt(k, i, j, T_SVAL)]);
				            else if (RVPLOT == "#res")
					              data.push([K_getDataAt(k, i, j, T_TIME), K_getDataAt(k, i, j, T_SVAL) - K_getDataAt(k, i, j, T_PRED)]);
			          }
			          plotter.series[i].setData(data, false);
		        }
		        
		        plotter.redraw();
        } else {
            if (PHASED_PLANET < 1 || PHASED_PLANET > K_getNplanets(k)) {
                uialert("Selected planet in phased radial velocity plot is " + PHASED_PLANET + ", but there are not enough planets in the fit.");

                return;
            } else {
                plotter.xAxis[0].update({title:{text: RV_PHASED_XAXIS + PHASED_PLANET}}, false);
            }
            
            var dataSets = [];
            for (i = 0; i < SERIES; i++) {
			          if (i >= nsets) {
				            plotter.series[i].hide();
				            continue;
			          }
			          else
				            plotter.series[i].show();
                dataSets[i] = [];
                plotter.series[i].update({name:K_getDataName(k, i)}, false);
			      }
            K_getPhasedDataForPlanet(k, PHASED_PLANET, -1, -1);
            for (i = 0; i < K_getNdata(k); i++) {
                var d = parseInt(K_getPhasedDataForPlanet(k, -1, i, T_SET));
                dataSets[d].push([K_getPhasedDataForPlanet(k, -1, i, T_TIME),
                                 K_getPhasedDataForPlanet(k, -1, i, T_VAL)]);
            }
            for (i = 0; i < nsets; i++)
                plotter.series[i].setData(dataSets[i], false);
            
            plotter.redraw();
        }
	  };
	  
	  var refreshRVLine = function(redraw) {
        if (K_getNdata(k) == 0)
            return;

		    var plotter = $("#rvplot").highcharts();
		    var SAMP = 0;
		    var rvline = [];
        var i;
        
		    if (K_getNplanets(k) > 0) {
			      var minP = K_getElement(k, 1, PER);
			      for (i = 2; i <= K_getNplanets(k); i++)
				        minP = Math.min(minP, K_getElement(k, i, PER));
			      var tmin = K_getDataAt(k, ALL, 0, 0);
			      var tmax = K_getDataAt(k, ALL, K_getNdata(k)-1, 0);
			      SAMP = Math.floor((tmax-tmin)/(minP/40));
		    } 
		    SAMP = Math.max(SAMP, 20);
		    SAMP = Math.min(SAMP, 800);
        
		    if (RVPLOT == "#rv") {
			      console.log(tmin);
            console.log(tmax);
			      if (K_getRVLine(k, -SAMP, 0) > 0) {
				        for (i = 0; i < SAMP; i++)
					          rvline.push([K_getRVLine(k, i, 0), K_getRVLine(k, i, 1)]);
			      }
			      plotter.series[RVLINE].show();
			      plotter.series[RVLINE].setData(rvline, true);
		    } else if (RVPLOT == "#res") {
			      plotter.series[RVLINE].hide();			
		    } else if (RVPLOT == "#phased") {
            if (PHASED_PLANET < 1 || PHASED_PLANET > K_getNplanets(k)) {
                uialert("Selected planet in phased radial velocity plot is " + PHASED_PLANET + ", but there are not enough planets in the fit.");
                return;
            }
            
            if (K_getPhasedRVLine(k, PHASED_PLANET, -SAMP, -1) > 0) {
                for (i = 0; i < SAMP; i++)
                    rvline.push([K_getPhasedRVLine(k, -1, i, 0), K_getPhasedRVLine(k, -1, i, 1)]);
            }
            
			      plotter.series[RVLINE].show();
			      plotter.series[RVLINE].setData(rvline, true);            
        }
	  };
	  
	  var zoom = 200;
	  zoomFactor = 1;
	  var dtheta = 2;
	  var TORAD = Math.PI/180;
	  var POINTSIZE = 6;
	  var ORBITCOLOR = "#cccccc";
	  
	  var zoomInOut = function(dir) {
		    if (dir < 0) {
			      if (zoomFactor == 1)
				        zoomFactor = -2;
			      else
				        zoomFactor --;
		    } else {
			      if (zoomFactor == -2)
				        zoomFactor = 1;
			      else
				        zoomFactor ++;
		    }
		    K.refresh('orbit');
	  };
	  
	  var refreshOrbit = function() {
		    var zoomFac = (zoomFactor < 0. ? -1./zoomFactor : zoomFactor);
		    
		    
		    
		    var canvas = $("#orbitalplot");	
		    canvas.clearCanvas();	
		    canvas.translateCanvas({translateX: canvas.width()/2, translateY: canvas.height()/2});
		    
		    canvas.drawPolygon({fillStyle:"black", x: 0, y: 0, radius:POINTSIZE, sides: 6, concavity: 0.5});
		    
		    var outside = 0;
		    for (var i = 1; i <= K_getNplanets(k); i++) {
			      var a = K_getElement(k, i, SMA) * zoom * zoomFac;
			      var e = K_getElement(k, i, ECC);
			      var p = K_getElement(k, i, LOP);
			      var b = (e == 0. ? a : Math.sqrt(a*a*(1-e*e)));
			      var f = (K_getElement(k, i, TRUEANOMALY)) * TORAD;
			      var r = a * (1-e*e) / (1 + e*Math.cos(f));
			      var center = -a * e;
			      
			      if (a * (1-e) > 0.5 * zoom)
				        outside++;
			      else {
				        canvas.rotateCanvas({ x:0, y:0, rotate: -p })
					          .drawEllipse({strokeStyle: ORBITCOLOR, x: center, y: 0, width: 2*a, height: 2*b})
					          .drawEllipse({fillStyle:"black", x:r * Math.cos(f), y:-r * Math.sin(f), width:POINTSIZE, height:POINTSIZE}) 			
					          .restoreCanvas();
			      }
		    }
		    
		    canvas.restoreCanvas();
		    $("#zoomText").html(
			      (zoomFactor < 0. ?  -zoomFactor : (1./zoomFactor).toFixed(2)) + " AU" +
			          (outside > 0 ? "<br>[" + outside + " planet" + (outside > 1 ? "s" : "") + " outside the view]" : "")
		    );
		    
		    
		    return;

	  };
	  
	  var prettyValue = function(v) {
		    if (Math.abs(v) > 1e-2)
			      v = v.toFixed(3);
		    else if (Math.abs(v) > 1e-3)
			      v = v.toFixed(4);
		    else if (Math.abs(v) > 1e-4)
			      v = v.toFixed(5);
		    else if (Math.abs(v) > 1e-5)
			      v = v.toFixed(6);
		    else if (Math.abs(v) > 1e-6)
			      v = v.toFixed(7);
		    else if (Math.abs(v) > 1e-7)
			      v = v.toFixed(6);
		    else
			      v = 0.;
		    return v;
		    
	  };
	  
	  var refreshPlanetPanel = function() {
		    for (var i = 1; i <= K_getNplanets(k); i++) {
			      for (var j = PER; j <= LOP; j++) {
				        var v = prettyValue(K_getElement(k, i, j));
				        
				        
				        $("#element_" + i + "_" + j).val(v);
				        $("#elementSlider_" + i + "_" + j).val(j == PER || j == MASS ? Math.log(v)/Math.LN10 : v);
			      }
			      
			      $("#extra_" + i).html("<label>Semi-major axis [AU]:</label>&nbsp;" + prettyValue(K_getElement(k, i, SMA)) +
				                          ", <label>Semiamp. [m/s]:</label>&nbsp;" + prettyValue(K_getElement(k, i, SEMIAMP)));
		    }

        
        
	  };
	  
	  var refreshParamPanel = function() {
		    for (var i = 0; i < MAX_SETS; i++) {
			      var v = prettyValue(K_getPar(k, i));
			      
			      $("#offset_" + i).val(v);
			      $("#offsetSlider_" + i).val(v);
		    }
	  };
	  
	  var refreshStats = function() {
		    $("#chi2").text(K_getChi2(k).toFixed(2));
		    $("#rms").text(K_getRms(k).toFixed(2));		
		    $("#jitter").text(K_getJitter(k).toFixed(2));
		    $("#data").text(K_getNsets(k) + " sets, " + K_getNdata(k) + " data points");
		    $("#mstar").text(K_getMstar(k));
		    $("#epoch").text(K_getEpoch(k));
	  };

    var BASEURL = location.protocol + '//' + location.host + location.pathname;
    var URLPARAMS = ['P', 'M', 'MA', 'E', 'L'];
    var PRECISION = 7;
    var shortenNumber = function(n) {
        var s = n.toPrecision(PRECISION);
        var s2 = s.replace(/0*$/, '');

        if (parseFloat(s) == parseFloat(s2))
            return s2;
        else
            return s;
    };
    
	  var refreshShare = function() {
        var url = BASEURL + "?";
        url += "sys=" + encodeURI(currentSystem);
        url += "&np=" + K_getNplanets(k);
        var i;
        for (i = 1; i <= K_getNplanets(k); i++)
            for (j = PER; j <= LOP; j++) {
                var v = K_getElement(k, i, j);
                if (v != 0.)
                    url += "&" + URLPARAMS[j] + i + "=" + shortenNumber(v);
            }
        for (i = 0; i < MAX_SETS; i++)
            if (K_getPar(k, i) != 0.)
                url += '&o' + i + "=" + K_getPar(k, i);

        if (_.parameter("debug"))
            url += "&debug=true";
        url += "&im=" + K_getIntMethod(k);
        
        $("#share").val(url);
    };

    var refreshCallbacks = [];

    var addRefreshCallback = function(cb) {
        refreshCallbacks.push(cb);
    };
    
	  // Refreshes all plots
	  var refresh = function(what) {
		    what = typeof what !== 'undefined' ? what : ['rvplot', 'rvline', 'elements', 'params', 'stats',
			                                               'psplot', 'orbit'];
		    
		    K_calculate(k);
		    if (what.indexOf('rvplot') != -1 || (RVPLOT != "#rv"))
			      refreshRVPlot();
		    if (what.indexOf('rvline') != -1)
			      refreshRVLine();
		    if (what.indexOf('elements') != -1)
			      refreshPlanetPanel();
		    if (what.indexOf('params') != -1)
			      refreshParamPanel();
		    if (what.indexOf('stats') != -1)			
			      refreshStats();
		    if (what.indexOf('psplot') != -1)			
			      refreshPSPlot();
		    if (what.indexOf('orbit') != -1)				
			      refreshOrbit();
        console.log('Refresh');
        refreshShare();

        for (var i = 0; i < refreshCallbacks.length; i++)
            refreshCallbacks[i]();
	  };
		
	  var setRVPlot = function(type) {
		    RVPLOT = type;
		    refreshRVPlot();
		    refreshRVLine();
	  };




    var exec = function(pre, fun, post, delay) {
        delay = delay || 0;
        if (pre) _.defer(pre);
        var f = function() {
            var ret = fun();
            if (ret)
                _.defer(function() {
                    $("#busy").hide(400);
                    if (post) post();
                });
            else
                _.delay(f, delay);
        };
        $("#busy").show(400, function() {
            _.delay(f, delay);            
        });
    };
	  
	  var optimize = function() {
		    var active = false;
		    for (var i = 1; i <= K_getNplanets(k); i++) {
			      for (var j = PER; j <= LOP; j++) {
				        if ($("#elementSel_" + i + "_" + j).is(":checked")) {
					          K_setElementFlag(k, i, j, MINIMIZE+ACTIVE);
					          active = true;
				        }
				        else
					          K_setElementFlag(k, i, j, ACTIVE);
			      }
		    }
		    for (var i = 0; i < MAX_SETS; i++)
			      if ($("#offsetSel_" + i).is(":checked")) {
				        K_setParFlag(k, i, MINIMIZE+ACTIVE);
				        active = true;
			      }
			  else
				    K_setParFlag(k, i, ACTIVE);
			  
		    if (!active) {
			      alert("You need to have at least one parameter selected (use the checkboxes next to each parameter.)");
			      return;
		    }

        
        var chi2 = K_getChi2(k);
        var delta = 1e-2;
        exec(null, function() {
            console.log(chi2);
            K_minimizeWithTimeout(k, 5);
            var chi2_2 = K_getChi2(k);
            console.log(chi2_2);

            if (isNaN(chi2_2) || (chi2 - chi2_2)/chi2 < delta || stopped) {
                refresh();
                
                return true;
            } else {
                chi2 = chi2_2;
                return false;
            };
        }, null);
	  };

    var stop = function() {
        stopped = true;
    };
    
	  // Loads a new system
	  var loadSys = function(sysname) {
		    init();
		    K_addDataFromSystem(k, "datafiles/" + sysname);
		    if (K_getNsets(k) > MAX_SETS) {
			      alert("Could not open " + system);
			      loadSys('datafiles/14Her.sys');
			      return;
		    }
		    
		    for (var i = 0; i < K_getNsets(k); i++) {
			      $("#offsetLabel_" + i).text(K_getDataName(k, i).replace("datafiles/", ""));
			      $("#offsetPanel_" + i).show();
		    }
		    for (var i = K_getNsets(k); i < 6; i++)
			      $("#offsetPanel_" + i).hide();
		    for (var i = 1; i <= MAX_PLANETS; i++)
			      $("#planet_" + i).hide();
		    currentSystem = sysname;
		    refresh();
	  };
	  
	  var addPlanet = function(period) {
		    period = typeof period !== 'undefined' ? period : 100;
		    var n = K_getNplanets(k);
			  
		    if (n == MAX_PLANETS) {
			      alert("Cannot add more planets.");
			      return;
		    }
		    
		    K_addPlanet(k, NULL);
		    n++;
		    K_setElement(k, n, PER, period);
		    K_setElement(k, n, MASS, 1.);
		    K_setElement(k, n, MA, 0.);
		    K_setElement(k, n, ECC, 0.);
		    K_setElement(k, n, LOP, 0.);

		    $("#planet_" + n).show();
        
		    refresh(['rvline', 'elements', 'stats', 'psplot', 'orbit']);
	  };
	  
	  var removePlanet = function() {
		    var n = K_getNplanets(k);		
		    if (n == 0) {
			      alert("No more planets to remove.");
			      return;
		    }

		    K_removePlanet(k, n);
		    $("#planet_" + n).hide();
		    refresh(['rvline', 'elements', 'stats', 'psplot', 'orbit']);
	  };

    var loadFromURL = function() {
        K.loadSys(_.parameter("sys"));
        
        var i, v;
        var np = +(_.parameter("np") || 0);
        for (i = 1; i <= np; i++) {
            addPlanet(100.);
            for (var j = 0; j < URLPARAMS.length; j++) {
                v = +(_.parameter(URLPARAMS[j] + i) || 0.0);
                K_setElement(k, i, j, v);
            }
        }

        for (i = 0; i < MAX_SETS; i++) {
             v = +(_.parameter('o' + i) || 0.0);
             K_setPar(k, i, v);
        }

        K_setIntMethod(k, +(_.parameter('im') || KEPLER));
        refresh();
    };
	  
	  var setIntegrated = function(integ) {
		    if (integ)
		        INTMETHOD = RK89;
		    else
		        INTMETHOD = KEPLER;
		    K_setIntMethod(k, INTMETHOD);

        
//        setBusy(function() {
		        refresh();
//        });
	  };

    var isIntegrated = function() {
        return INTMETHOD != KEPLER;
    };
	  
	  var setElement = function(row, column, value, psplot) {
		    psplot = typeof psplot !== 'undefined' ? psplot : true;				
		    K_setElement(k, row, column, value);
		    refresh(['rvline', 'elements', 'orbit', 'stats', psplot ? "psplot" : ""]);
	  };
	  
	  var setParam = function(row, value, psplot) {
		    psplot = typeof psplot !== 'undefined' ? psplot : true;		
		    K_setPar(k, row, value);
		    refresh(['rvplot', 'params', 'stats', psplot ? "psplot" : ""]);
	  };

    var message = function(msg) {
        $("#output").val($("#output").val() + msg);
    };

    var timeFunction = function(f) {
        var start = new Date().getTime();
        f();
        return(new Date().getTime() - start);
    };
    
	  var benchmark = function() {
        if (!confirm("This might take a while to run\n(your browser will appear frozen for couple of minutes). Continue?"))
            return;
        $('#output_panel').show();
        var reps = 50;
        var im = K_getIntMethod(k);
        
        message("Starting benchmark... [x" + reps + "]\n");
        message("Refreshing Keplerian: " +
                timeFunction(function() {
                    for (var i = 0; i < reps; i++)
                        K_calculate(k);
                        //refresh('rvline');
                })/reps + "ms\n");
        message("Refreshing RK89: " +
                timeFunction(function() {
                    K_setIntMethod(k, RK89);
                    for (var i = 0; i < reps; i++)
                        K_calculate(k);
                        //refresh('rvline');
                })/reps + "ms\n");
        message("Refreshing Power Spectrum: " +
                timeFunction(function() {
                    for (var i = 0; i < reps; i++)
                        //refresh('psplot');
                        K_getPeriodogramAt(k, -1, 0);
                })/reps + "ms\n");

        K_setIntMethod(k, im);
        
    };
    
    
	  return {init:init, refresh:refresh,  loadSys:loadSys, optimize:optimize, setIntegrated:setIntegrated, isIntegrated:isIntegrated, setElement:setElement, setParam:setParam, addPlanet:addPlanet, removePlanet:removePlanet, setRVPlot:setRVPlot, zoomInOut:zoomInOut, getFAPforPeriod:getFAPforPeriod, benchmark:benchmark, loadFromURL: loadFromURL, stop:stop,
            addRefreshCallback:addRefreshCallback, setPhasedPlanet: setPhasedPlanet, k:function() { return k; },
           getNplanets: function() { return K_getNplanets(k); }};
} ();


