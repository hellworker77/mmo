using Application.DTOs.LimitedLiabilityCompany;
using Application.Validators.Domain;
using FluentValidation;

namespace Application.Validators;

public class LimitedLiabilityCompanyValidator : AbstractValidator<LimitedLiabilityCompanyDto>
{
    public LimitedLiabilityCompanyValidator()
    {
        RuleFor(x => x.ShortName)
            .NotNull().NotEmpty();
        
        RuleFor(x => x.LongName)
            .NotNull().NotEmpty();

        RuleFor(x => x.RegisterDate)
            .NotNull();

        RuleFor(x => x.ScanContract)
            .Must(ValidationHelpers.FileValidate)
            .When(x => !x.LackContract);

        RuleFor(x => x.ScanINN)
            .Must(ValidationHelpers.FileValidate);

        RuleFor(x => x.ScanEGRIP)
            .Must(ValidationHelpers.FileValidate);

        RuleFor(x => x.ScanOGRN)
            .Must(ValidationHelpers.FileValidate);

        RuleFor(x => x.INN)
            .NotNull().NotEmpty().Length(DigitStringConstants.INNLength).Matches("[0-9]");

        RuleFor(x => x.OGRN)
            .NotNull().NotEmpty().Length(DigitStringConstants.OGRNLength).Matches("[0-9]");
        
        RuleFor(x => x.FinancialCredentials)
            .Must(x => x.Count > 0);
    }
}