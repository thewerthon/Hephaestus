﻿namespace Hephaestus.Backend.Application.Controllers;

public class TestsController(DatabaseContext context) : BaseEntityTraceableController<Test>(context) { }