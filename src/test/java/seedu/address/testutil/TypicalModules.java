package seedu.address.testutil;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import seedu.address.model.ModuleData;
import seedu.address.model.module.DbModule;
import seedu.address.model.module.Module;
import seedu.address.model.moduleplan.ModulePlan;

/**
 * A utility class containing a list of {@code Module} objects to be used in tests.
 */
public class TypicalModules {
    public static final Module CS2040S = new ModuleBuilder()
            .withCode("CS2040S")
            .withYear("1")
            .withSem("2")
            .withGrade("A-")
            .withName("Data Structures and Algorithms")
            .withModularCredit("4")
            .withDescription("This course introduces the fundamentals of data structures and algorithms.")
            .build();
    public static final Module CS2030S = new ModuleBuilder()
            .withCode("CS2030S")
            .withYear("1")
            .withSem("2")
            .withGrade("A")
            .withName("Programming Methodology II")
            .withModularCredit("4")
            .withDescription("This course is a follow up to CS1010.")
            .build();
    public static final Module MA2001 = new ModuleBuilder()
            .withCode("MA2001")
            .withYear("1")
            .withSem("2")
            .withGrade("B+")
            .withName("Linear Algebra I")
            .withModularCredit("4")
            .withDescription("This course is a first course in linear algebra.")
            .build();

    // Manually added
    public static final Module CS2101 = new ModuleBuilder()
            .withCode("CS2101")
            .withYear("2")
            .withSem("1")
            .withGrade("IP")
            .withName("Effective Communication for Computing Professionals")
            .withModularCredit("4")
            .withDescription("This course aims to equip students with the skills needed to communicate.")
            .build();
    public static final Module GEA1000 = new ModuleBuilder()
            .withCode("GEA1000")
            .withYear("1")
            .withSem("1")
            .withGrade("A+")
            .withName("Quantitative Reasoning with Data")
            .withModularCredit("4")
            .withDescription("This course aims to equip students with essential data literacy skills.")
            .build();
    public static final Module CS2100 = new ModuleBuilder()
            .withCode("CS2100")
            .withYear("2")
            .withSem("1")
            .withGrade("A")
            .withName("Computer Organisation")
            .withModularCredit("4")
            .withDescription("Learn about computer organisation")
            .build();

    public static final Module CS2106 = new ModuleBuilder()
            .withCode("CS2106")
            .withYear("2")
            .withSem("2")
            .withGrade("B")
            .withName("Introduction to Operating Systems")
            .withModularCredit("4")
            .withDescription("Learn about operating systems")
            .build();

    public static final Module IS6000 = new ModuleBuilder()
            .withCode("IS6000")
            .withYear("4")
            .withSem("2")
            .withGrade("IP")
            .withName("Topics in Information Systems and Analytics Research")
            .withModularCredit("0")
            .withDescription("A 0 MC module")
            .build();

    public static final Module IND5005A = new ModuleBuilder()
            .withCode("IND5005A")
            .withYear("4")
            .withSem("2")
            .withGrade("IP")
            .withName("Professional Career Development")
            .withModularCredit(".5")
            .withDescription("A .5 MC module")
            .build();
    //Add more

    private TypicalModules() {}

    public static ModulePlan getTypicalModulePlan() {
        ModulePlan mp = new ModulePlan();

//        mp.addSemester(new ModulePlanSemester(new Year("1"), new Semester("1")));
//        mp.addSemester(new ModulePlanSemester(new Year("1"), new Semester("2")));
//        mp.addSemester(new ModulePlanSemester(new Year("2"), new Semester("1")));
//        mp.addSemester(new ModulePlanSemester(new Year("2"), new Semester("2")));

        for (Module module : getTypicalModules()) {
            mp.addModule(module);
        }
        return mp;
    }

    public static ModuleData getTypicalModuleData() {
        ModuleData moduleData = new ModuleData();

        for (Module m : getTypicalModules()) {
            Module Module = new Module(
                    m.getModuleCode(), m.getName(), m.getDescription(), m.getModularCredit());
            moduleData.addModule(Module);
        }
        return moduleData;
    }

    public static List<Module> getTypicalModules() {
        return new ArrayList<>(Arrays.asList(CS2030S, CS2040S, MA2001, CS2101, GEA1000));
    }

}
