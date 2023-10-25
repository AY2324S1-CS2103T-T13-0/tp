package seedu.address.model.module;

import static java.util.Objects.requireNonNull;
import static seedu.address.commons.util.AppUtil.checkArgument;

/**
 * Represents a Module's Module Code in the system.
 * Guarantees: immutable; is valid as declared in {@link #isValidModuleCode(String)}
 */
public class ModuleCode {
    /*
    Refer to https://www.nus.edu.sg/registrar/academic-information-policies/undergraduate-students/modular-system or
    https://www.nus.edu.sg/registrar/docs/info/nusbulletin/AY201213_GeneralInformation.pdf.
     */
    public static final String MESSAGE_CONSTRAINTS = "Module codes should contain a two- or three-letter prefix "
            + "and four digits. Optionally, it can have a one letter suffix";

    public static final String VALIDATION_REGEX = "^[\\p{Upper}]{2,3}[\\p{Digit}]{4}[\\p{Upper}]?$";

    private String moduleCode;

    /**
     * Constructs a {@code Code}.
     *
     * @param moduleCode A valid module code.
     */
    public ModuleCode(String moduleCode) {
        requireNonNull(moduleCode);
        checkArgument(isValidModuleCode(moduleCode), MESSAGE_CONSTRAINTS);
        this.moduleCode = moduleCode;
    }

    /**
     * Checks if the given input string is a valid module code.
     *
     * @param test The input string to be checked.
     * @return true if the input string is a valid module code, false otherwise.
     */
    public static boolean isValidModuleCode(String test) {
        return test.matches(VALIDATION_REGEX);
    }

    @Override
    public String toString() {
        return moduleCode;
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof ModuleCode)) {
            return false;
        }

        ModuleCode otherModuleCode = (ModuleCode) other;
        return moduleCode.equals(otherModuleCode.moduleCode);
    }

    @Override
    public int hashCode() {
        return moduleCode.hashCode();
    }
}
